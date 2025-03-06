import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import ProtectedRoute from './components/Auth/ProtectedRoute';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Login = lazy(() => import('./components/Auth/Login'));
const Account = lazy(() => import('./components/Account/Account'));
const Register = lazy(() => import('./components/Auth/Register'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4965', // Deep blue
      light: '#62B6CB', // Light blue
      dark: '#0C2233', // Dark blue
    },
    secondary: {
      main: '#FF6B6B', // Coral
      light: '#FFD93D', // Yellow
      dark: '#FF4949', // Dark coral
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#1B4965',
      secondary: '#5C6B73',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CartProvider>
            <Router basename="/">
              <div className="App">
                <Header />
                <main>
                  <Breadcrumbs />
                  <Suspense fallback={<div>Loading...</div>}>
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
                    </Routes>
                  </Suspense>
                </main>
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
