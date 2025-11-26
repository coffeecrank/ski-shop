import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router";
import { NavBar } from "./features/nav/NavBar.tsx";
import { useAppSelector } from "./store.ts";

function App() {
  const { darkMode } = useAppSelector((state) => state.ui);

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
      <NavBar />
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

export { App };
