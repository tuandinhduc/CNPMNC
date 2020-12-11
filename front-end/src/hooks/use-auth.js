import React, { useContext, createContext } from "react";
import { useLocalStorage } from "./use-localstorage";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useLocalStorage("token", "user");

  const signin = (username, password) => {
    setUser("user");
  };

  const signup = (username, password) => {
    setUser("user");
  };

  const signout = () => {
    setUser("null");
  };

  return {
    user,
    setUser,

    signin,

    signup,

    signout,
  };
}
