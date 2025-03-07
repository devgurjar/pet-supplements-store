import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Container, CircularProgress } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { styled } from '@mui/material/styles';
import theme from './theme';  // Import the theme

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Login = lazy(() => import('./components/Auth/Login'));
const Account = lazy(() => import('./components/Account/Account'));
const Register = lazy(() => import('./components/Auth/Register'));
const Product = lazy(() => import('./components/Product/Product'));
const Media = lazy(() => import('./pages/Media'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

const MainContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const LoadingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
  padding: theme.spacing(2),
}));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CartProvider>
            <Router basename="/">
              <div className="App">
                <Header />
                <Breadcrumbs />
                <MainContainer maxWidth="lg">
                  <Suspense fallback={
                    <LoadingContainer>
                      <CircularProgress />
                    </LoadingContainer>
                  }>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:category" element={<Products />} />
                      <Route path="/products/:category/:productId" element={<Product />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route
                        path="/account"
                        element={
                          <ProtectedRoute>
                            <Account />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/cart"
                        element={
                          <ProtectedRoute>
                            <Cart />
                          </ProtectedRoute>
                        }
                      />
                      <Route path="/media" element={<Media />} />
                      <Route path="/contact" element={<ContactUs />} />
                    </Routes>
                  </Suspense>
                </MainContainer>
                <footer>
                  {/* Add footer content */}
                </footer>
              </div>
            </Router>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
