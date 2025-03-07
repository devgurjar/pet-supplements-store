import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.shadows[2],
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: 80,
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: '0 32px 0 16px',
  [theme.breakpoints.down('sm')]: {
    height: 56,
    padding: '0 24px 0 8px',
    minHeight: 'auto',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: '1.5rem',
  letterSpacing: '0.5px',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: '1rem',
  padding: '8px 16px',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
  minWidth: 'auto',
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    padding: '4px 8px',
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  '&:hover': {
    opacity: 0.9,
  },
  [theme.breakpoints.down('sm')]: {
    '& > svg': {
      width: 28,
      height: 28,
    },
  },
}));

const Header = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <LogoContainer 
          component={Link} 
          to="/"
        >
          <Logo size={40} />
          <LogoText sx={{ ml: { xs: 0.5, sm: 2 } }}>
            IVET Store
          </LogoText>
        </LogoContainer>
        <Box sx={{ flexGrow: 1 }} />
        <NavButton 
          component={Link} 
          to="/products"
          variant="text"
          size="small"
        >
          Products
        </NavButton>
        <NavButton 
          component={Link} 
          to="/media"
          variant="text"
          size="small"
        >
          Media
        </NavButton>
        <NavButton 
          component={Link} 
          to="/contact"
          variant="text"
          size="small"
        >
          Contact Us
        </NavButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;