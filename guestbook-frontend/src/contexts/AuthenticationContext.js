import React, { createContext } from "react";

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = props => {
  const user = null;

  return (
    <AuthenticationContext.Provider
      value={{
        user
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContextProvider };
