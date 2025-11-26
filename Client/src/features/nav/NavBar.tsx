import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, LinearProgress, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store.ts";
import { toggleDarkMode } from "../../uiSlice.ts";

function NavBar() {
  const { darkMode, isLoading } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const midLinks = [
    { title: "about", path: "/about" },
    { title: "catalog", path: "/catalog" },
    { title: "contact", path: "/contact" },
  ];
  const rightLinks = [
    { title: "login", path: "/login" },
    { title: "register", path: "/register" },
  ];
  const navLinkStyles = {
    "&.active": { color: "#baecf9" },
    "&:hover": { color: "grey.500" },
    color: "inherit",
    textDecoration: "none",
    typography: "h6",
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <Box alignItems="center" display="flex">
          <Typography component={NavLink} sx={navLinkStyles} to="/" variant="h6">
            SKI SHOP
          </Typography>
          <IconButton onClick={() => dispatch(toggleDarkMode())} sx={{ ml: 1 }} color="inherit">
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
          </IconButton>
        </Box>
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} key={path} sx={navLinkStyles} to={path}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box alignItems="center" display="flex">
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} key={path} sx={navLinkStyles} to={path}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
      {isLoading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="secondary" />
        </Box>
      )}
    </AppBar>
  );
}

export { NavBar };
