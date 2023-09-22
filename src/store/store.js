import pb from "@/api/pocketbase";
import {useState} from "react";
import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

const USER_COLLECECTION = "users";

const initalAuthState = {
  isAuth: false,
  user: null,
  token: "",
};

const authStore = (set) => ({
  ...initalAuthState,

  /* Pb SDK를 사용한 회원가입 */
  signUp: async (registerUser) => {
    return await pb.collection(USER_COLLECECTION).create(registerUser);
  },

  /* Pb SDK를 사용한 로그인 */
  signIn: async (userNameOrEmail, password) => {
    const authData = await pb
      .collection(USER_COLLECECTION)
      .authWithPassword(userNameOrEmail, password);

    const {isValid, model, token} = pb.authStore;

    set(
      (state) => ({
        ...state,
        isAuth: isValid,
        user: model,
        token,
      }),
      false,
      "auth/signin"
    );

    return authData;
  },

  /* Pb SDK를 사용한 로그아웃 */
  signOut: async () => {
    const response = await pb.authStore.clear();
    set(
      (state) => ({
        ...state,
        ...initalAuthState,
      }),
      false,
      "auth/signout"
    );

    return response;
  },

  /* Pb SDK를 사용한 회원탈퇴 */
  Withdrawal: async (recordId) => {
    const response = await pb.collection(USER_COLLECECTION).delete(recordId);

    set(
      (state) => ({
        ...state,
        ...initalAuthState,
      }),
      false,
      "auth/withDrawal"
    );

    return response;
  },

  /* Pb SDK를 사용한 카카오톡으로 로그인 */
  SignWithKaKao: async () => {
    const kakaoAuth = await pb
      .collection(USER_COLLECECTION)
      .authWithOAuth2({provider: "kakao"});

    const {username: name, email, token} = kakaoAuth.meta;

    const updateUser = {
      name,
      username: email.split("@")[0],
    };

    set((state) => ({
      ...state,
      isAuth: true,
      user: updateUser,
      token,
    }));
    await pb
      .collection(USER_COLLECECTION)
      .update(kakaoAuth.record.id, updateUser);

    return kakaoAuth;
  },

  /* Pb SDK를 사용한 깃허브로 로그인 */
  SignWithGithub: async () => {
    const githubAuth = await pb
      .collection(USER_COLLECECTION)
      .authWithOAuth2({provider: "github"});

    set((state) => ({
      ...state,
      isAuth: true,
      user: {
        id: githubAuth.record.id,
        name: githubAuth.record.name,
        email: githubAuth.record.email,
        username: githubAuth.record.username,
      },
      token: githubAuth.token,
    }));
  },
});

const useAuthStore = create(persist(devtools(authStore), {name: "auth"}));

export default useAuthStore;
