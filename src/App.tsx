import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Home } from "pages/home";
import { mainTheme } from "theme";
import { store } from "redux/store";

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <Home />
    </ThemeProvider>
  </Provider>
);
