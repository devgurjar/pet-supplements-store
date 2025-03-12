import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Container, CircularProgress, CssBaseline, Box } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import { ContentWrapper } from './components/Header/Header';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { styled } from '@mui/material/styles';
import theme from './theme';  // Import the theme
import AboutUs from './pages/AboutUs';

// Lazy load with retry mechanism
const retryLoadComponent = (componentImport) => {
  return new Promise((resolve, reject) => {
    const retryImport = (retries = 0) => {
      componentImport()
        .then(resolve)
        .catch((error) => {
          if (retries < 3) {
            setTimeout(() => retryImport(retries + 1), 1000);
          } else {
            reject(error);
          }
        });
    };
    retryImport();
  });
};

// Lazy load components with retry
const Home = lazy(() => retryLoadComponent(() => import('./pages/Home')));
const Products = lazy(() => retryLoadComponent(() => import('./pages/Products')));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Login = lazy(() => import('./components/Auth/Login'));
const Account = lazy(() => import('./components/Account/Account'));
const Register = lazy(() => import('./components/Auth/Register'));
const Product = lazy(() => import('./components/Product/Product'));
const Media = lazy(() => retryLoadComponent(() => import('./pages/Media')));
const ContactUs = lazy(() => retryLoadComponent(() => import('./pages/ContactUs')));
const Blog = lazy(() => retryLoadComponent(() => import('./pages/Blog')));
const BlogPost = lazy(() => retryLoadComponent(() => import('./components/Blog/BlogPost')));

const MainContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  minHeight: '100vh',
}));

const LoadingFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <AuthProvider>
          <CartProvider>
            <Router>
              <CssBaseline />
              <Header />
              <ContentWrapper>
                <MainContainer maxWidth="lg">
                  <Breadcrumbs />
                  <Suspense fallback={<LoadingFallback />}>
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
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:slug" element={<BlogPost />} />
                      <Route path="/about" element={<AboutUs />} />
                    </Routes>
                  </Suspense>
                </MainContainer>
              </ContentWrapper>
            </Router>
          </CartProvider>
        </AuthProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
