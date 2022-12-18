import Users from "./cmp/Users";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, Toolbar } from "@mui/material";
import reducer from "./redux/reducer/users.reducer";

const store = createStore(reducer);
const theme = createTheme({
  palette: {
    mode: "dark"
  }
})

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Users />
        </ThemeProvider>
      </Provider>
    </>
  );
}