import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import {
  AuthenticationContextProvider,
  AuthenticationContext
} from "./contexts/AuthenticationContext";
import AuthenticatedApp from "./screens/AuthenticatedApp";
import UnauthenticatedApp from "./screens/UnauthenticatedApp";

const theme = {
  primary: "#A4C2F7",
  secondary: "#3A4F41",
  secondary2: "#12263A",
  ghostWhite: "#F7F7FF"
};

function AppSwitch() {
  const { user } = useContext(AuthenticationContext);
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <AppSwitch />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}

export default App;
