import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs as MUIBreadcrumbs, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { styled } from '@mui/material/styles';

// Styled components
const BreadcrumbsContainer = styled(Box)(({ theme }) => ({
  padding: '8px 24px',
  background: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: '24px',
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px',
    marginBottom: '16px',
  },
  '& .MuiBreadcrumbs-ol': {
    justifyContent: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '0.875rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '& .MuiTypography-root': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
  },
}));

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  // Format path names to be more readable
  const formatPathName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <BreadcrumbsContainer>
      <MUIBreadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link to="/">Home</Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const formattedName = formatPathName(name);
          
          return isLast ? (
            <Typography key={name} color="textPrimary">
              {formattedName}
            </Typography>
          ) : (
            <Link key={name} to={routeTo}>
              {formattedName}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs; 