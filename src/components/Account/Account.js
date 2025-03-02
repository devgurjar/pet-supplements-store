import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import {
  Person,
  ShoppingBag,
  Favorite,
  LocationOn,
  ExitToApp
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Person sx={{ fontSize: 60, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                {user?.name}
              </Typography>
              <Typography color="text.secondary">
                {user?.email}
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <ShoppingBag />
                </ListItemIcon>
                <ListItemText primary="My Orders" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText primary="Wishlist" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText primary="Addresses" />
              </ListItem>
            </List>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              startIcon={<ExitToApp />}
              onClick={handleLogout}
              sx={{ mt: 2 }}
            >
              Logout
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Recent Orders
            </Typography>
            <Typography color="text.secondary">
              You haven't placed any orders yet.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account; 