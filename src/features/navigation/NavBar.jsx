import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          MyApp
        </Typography>
        <Box>
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/products"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Products
          </Button>
          <Button color="inherit" sx={{ fontWeight: "bold" }}>
            About
          </Button>
          <Button
            component={Link}
            to="/signIn"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Authenticate
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
