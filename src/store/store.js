import {useState} from "react";
import {create} from "zustand";

const authStore = (set) => {
  const initalAuthState = {
    isAuth: false,
    user: null,
    token: "",
  };

  const [authState, setAuthState] = useState(initalAuthState);

  return authState;
};

export const useAuthStore = create(authStore);
