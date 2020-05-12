import React, { createContext, useState, useEffect } from "react";
import { guestbook } from "../helpers/constants";
export const AuthenticationContext = createContext();

const AuthenticationContextProvider = (props) => {
  const [user, setUser] = useState(localStorage.getItem("guestbookUser"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let token;
    if (!user) return;
    setLoading(true);
    if (typeof user === "string") {
      token = JSON.parse(user);
      setUser(JSON.parse(user));
      token = token.token;
    } else {
      token = user.token;
    }
    if (!token) return;
    guestbook.interceptors.request.use((config) => {
      if (token) {
        config.headers.common["Authorization"] = token;
      }
      return config;
    });
    setLoading(false);
  }, [user]);
  const loginRequest = (userData) => {
    let requestURL = `/users/login`;
    return new Promise((resolve, reject) => {
      guestbook
        .post(requestURL, userData)
        .then((response) => {
          setUser(response.data);
          localStorage.setItem("guestbookUser", JSON.stringify(response.data));
          guestbook.interceptors.request.use((config) => {
            if (response.data.token) {
              config.headers.common["Authorization"] = response.data.token;
            }
            return config;
          });
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("guestbookUser");
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        loginRequest,
        logout,
        loading,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContextProvider };
