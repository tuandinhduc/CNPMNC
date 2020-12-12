import React, { useContext, createContext } from "react";
import { useLocalStorage } from "./use-localstorage";
import UserAPI from "./../apis/UserAPI.js";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useLocalStorage("token", "null");

  const signin = async (username, password) => {
    console.log(username);
    const res = await UserAPI.signin(username, password);
    console.log(res.data);
    if (res.data === true) {
      setUser(username);
    }
  };

  const signup = async (username, password) => {
    const res = await UserAPI.signup(username, password);
    console.log("sign up", res.data);
    if (res.data === true) {
      setUser(username);
    }
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
