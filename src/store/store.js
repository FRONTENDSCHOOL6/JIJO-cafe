import pb from "@/api/pocketbase";
import {create} from "zustand";

const initalAuthState = {
  isAuth: false,
  user: null,
  token: "",
};

const useAuthStore = create((set) => ({
  ...initalAuthState,

  /* Pb SDK를 사용한 회원가입 */
  signUp: async (registerUser) => {
    return await pb.collection("users").create(registerUser);
  },

  /* Pb SDK를 사용한 로그인 */
  signIn: async (userNameOrEmail, password) => {
    return await pb
      .collection("users")
      .authWithPassword(userNameOrEmail, password);
  },

  /* Pb SDK를 사용한 로그아웃 */
  signOut: async () => {
    return await pb.authStore.clear();
  },

  /* Pb SDK를 사용한 회원탈퇴 */
  Withdrawal: async (recordId) => {
    return await pb.collection("users").delete(recordId);
  },
}));

export default useAuthStore;
