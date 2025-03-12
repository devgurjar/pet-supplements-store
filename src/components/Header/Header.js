import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  useMediaQuery, 
  useTheme,
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArticleIcon from '@mui/icons-material/Article';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@mui/icons-material/Info';
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
    height: 72,
    padding: '0 16px',
    minHeight: 'auto',
    justifyContent: 'center',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  '&:hover': {
    opacity: 0.9,
  },
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '180px',
    '& > svg': {
      width: '100%',
      height: 'auto',
    }
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
    display: 'none',
  },
}));

const MobileNav = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.appBar,
  borderRadius: 0,
  background: theme.palette.primary.main,
  boxShadow: '0px -2px 4px rgba(0,0,0,0.1)',
}));

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  background: theme.palette.primary.main,
  '& .MuiBottomNavigationAction-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: theme.palette.common.white,
    },
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('sm')]: {
    paddingBottom: theme.spacing(2),
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'Products', path: '/products', icon: <ShoppingBasketIcon /> },
    { label: 'Media', path: '/media', icon: <PlayCircleIcon /> },
    { label: 'About Us', path: '/about', icon: <InfoIcon /> },
    { label: 'Blog', path: '/blog', icon: <ArticleIcon /> },
    { label: 'Contact', path: '/contact', icon: <ContactPageIcon /> },
  ];

  const getCurrentValue = () => {
    const currentPath = location.pathname;
    const index = navigationItems.findIndex(item => item.path === currentPath);
    return index >= 0 ? index : false;
  };

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          <LogoContainer component={Link} to="/">
            <Logo size={isMobile ? 64 : 72} />
          </LogoContainer>
          
          {!isMobile && (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <NavButton component={Link} to="/products" variant="text" size="small">
                Products
              </NavButton>
              <NavButton component={Link} to="/media" variant="text" size="small">
                Media
              </NavButton>
              <NavButton component={Link} to="/about" variant="text" size="small">
                About Us
              </NavButton>
              <NavButton component={Link} to="/contact" variant="text" size="small">
                Contact Us
              </NavButton>
              <NavButton component={Link} to="/blog" variant="text" size="small">
                Blog
              </NavButton>
            </>
          )}
        </StyledToolbar>
      </StyledAppBar>

      {isMobile && (
        <MobileNav elevation={3}>
          <StyledBottomNavigation
            value={getCurrentValue()}
            showLabels
          >
            {navigationItems.map((item, index) => (
              <BottomNavigationAction
                key={item.path}
                label={item.label}
                icon={item.icon}
                component={Link}
                to={item.path}
                value={index}
                sx={{
                  minWidth: 'auto',
                  padding: '6px 0',
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.625rem'
                  }
                }}
              />
            ))}
          </StyledBottomNavigation>
        </MobileNav>
      )}
    </>
  );
};

export default Header;