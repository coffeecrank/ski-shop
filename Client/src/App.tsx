import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "./features/nav/NavBar.tsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#eaeaea",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Box
        sx={{
          background: darkMode
            ? "radial-gradient(circle, #1e3aBa, #111B27)"
            : "radial-gradient(circle, #baecf9, #f0f9ff)",
          minHeight: "100vh",
          py: 6,
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 8 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
