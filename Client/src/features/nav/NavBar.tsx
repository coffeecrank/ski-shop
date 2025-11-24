import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";

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

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function NavBar({ darkMode, toggleDarkMode }: Props) {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <Box alignItems="center" display="flex">
          <Typography component={NavLink} sx={navLinkStyles} to="/" variant="h6">
            SKI SHOP
          </Typography>
          <IconButton onClick={toggleDarkMode}>
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
    </AppBar>
  );
}

export default NavBar;
