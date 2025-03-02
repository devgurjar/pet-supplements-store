import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <Logo size={40} />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Pet Supplements Store
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" component={Link} to="/products">Products</Button>
        {isAuthenticated ? (
          <Button
            color="inherit"
            component={Link}
            to="/account"
            startIcon={<PersonIcon />}
          >
            Account
          </Button>
        ) : (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              startIcon={<PersonIcon />}
            >
              Login
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/register"
              sx={{ ml: 1 }}
            >
              Register
            </Button>
          </>
        )}
        <IconButton color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;