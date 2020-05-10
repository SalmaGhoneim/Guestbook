import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = props => {
  const user = {
    name: "Salma Ghoneim",
    username: "salma_ghoneim",
    age: 23,
    email: "salmaghoneim97@gmail.com"
  };
  // const user = null;

  //   const [user, setUser] = useState(null);
  //   const [fetched, setFetched] = useState(false);

  //   const login = (username, password) => {
  //     return auth.login(username, password).then(data => {
  //       setUser(data.data);
  //     });
  //   };

  //   const logout = async () => {
  //     setUser(null);
  //     await auth.logout();
  //   };

  //   const getUser = async () => {
  //     const user = await auth.getUser();
  //     setUser(user ? user.data : null);
  //   };

  //   if (!fetched) {
  //     getUser().then(() => setFetched(true));
  //   }

  //   if (!fetched) {
  //     return <LoadingPage />;
  //   }

  return (
    <AuthenticationContext.Provider
      value={{
        user
        // login,
        // logout,
        // getUser,
        // setUser
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContextProvider };
