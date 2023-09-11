import pb from "@/api/pocketbase";
import {create} from "zustand";
import {devtools} from "zustand/middleware";

const USER_COLLECECTION = "user";

const initalAuthState = {
  isAuth: false,
  user: null,
  token: "",
};

const authStore = create((set) => ({
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
}));

const useAuthStore = create(devtools(authStore));

export default useAuthStore;
