import * as React from "react";
import { Layout } from "@src/app/layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
