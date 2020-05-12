import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import {
  AuthenticationContextProvider,
  AuthenticationContext,
} from "./contexts/AuthenticationContext";
import AuthenticatedApp from "./screens/AuthenticatedApp";
import UnauthenticatedApp from "./screens/UnauthenticatedApp";

const theme = {
  primary: "#478ffb",
  secondary: "#12263A",
  ghostWhite: "#F7F7FF",
  font: "Philosopher",
};

function AppSwitch() {
  const { user } = useContext(AuthenticationContext);
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}
// Main TODOs
// TODO: some sort of snack bar to show user success/fail
// TODO: see effect of action on scree
// TODO: auth in backend on all funcs
// TODO: Enhance mongoose structure
// TODO: More form validation
// TODO: Loading screen for when the data is being loaded

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
