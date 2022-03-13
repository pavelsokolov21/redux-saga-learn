import { Home } from "pages/home";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "theme";

export const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Home />
  </ThemeProvider>
);
