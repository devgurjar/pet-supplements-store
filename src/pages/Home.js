import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo/Logo';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PetsIcon from '@mui/icons-material/Pets';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Helmet } from 'react-helmet-async';

const features = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
    title: 'Free Express Shipping',
    description: 'On orders above ₹999'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: '100% Authentic',
    description: 'All products are verified'
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: 'Expert Support',
    description: 'Talk to our pet experts'
  }
];

const featuredProducts = [
  {
    id: 1,
    title: 'I CAL PLUS',
    price: 955,
    oldPrice: 1099,
    rating: 4.8,
    reviews: 156,
    image: '/assets/images/I-cal-plus.png',
    tag: 'Best Seller'
  },
  {
    id: 2,
    title: 'I MIN PLUS',
    price: 275,
    oldPrice: 325,
    rating: 4.7,
    reviews: 142,
    image: '/assets/images/I-min-plus.png',
    tag: 'Popular'
  }
];

const categories = [
  {
    title: 'Cow Supplements',
    image: `${process.env.PUBLIC_URL}/assets/images/cow-category.jpg`,
    link: '/products?category=cows'
  },
  {
    title: 'Horse Products',
    image: `${process.env.PUBLIC_URL}/assets/images/horse-category.jpg`,
    link: '/products?category=horses'
  },
  {
    title: 'Pet Care',
    image: `${process.env.PUBLIC_URL}/assets/images/pet-category.jpg`,
    link: '/products?category=pets'
  }
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "iVet Store",
  "url": "https://ivetstore.com",
  "logo": "https://ivetstore.com/logo.png",
  "description": "Premium veterinary supplements supplier in India",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service"
  }
};

const Home = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <Box>
        {/* Hero Banner */}
        <Box 
          sx={{ 
            background: 'linear-gradient(135deg, #1B4965 0%, #62B6CB 100%)',
            py: { xs: 6, md: 12 },
            position: 'relative',
          }}
        >
          <Container sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container alignItems="center" spacing={4}>
              <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
                <Box sx={{ 
                  color: 'white', 
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  <Chip 
                    label="Special Offer" 
                    color="secondary" 
                    icon={<LocalOfferIcon />} 
                    sx={{ 
                      mb: 2,
                      backgroundColor: 'secondary.main',
                      '& .MuiChip-label': {
                        fontWeight: 'bold'
                      }
                    }} 
                  />
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 700,
                      fontSize: { xs: '2rem', md: '3.5rem' },
                      mb: 2,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    20% Off on All Supplements
                  </Typography>
                  <Typography 
                    sx={{ 
                      mb: 4,
                      opacity: 0.9,
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    Premium health products for your livestock and pets
                  </Typography>
                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2}
                    justifyContent="center"
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      component={Link}
                      to="/products"
                      sx={{ 
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Shop Now
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="large"
                      sx={{ 
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderColor: 'white',
                        borderWidth: '2px',
                        '&:hover': {
                          borderColor: 'white',
                          borderWidth: '2px',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                        },
                      }}
                    >
                      View Deals
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Trust Badges */}
        <Container sx={{ py: 4 }}>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'transparent',
                  }}
                >
                  <IconButton 
                    sx={{ 
                      mr: 2,
                      backgroundColor: 'primary.light',
                      color: 'white',
                    }}
                  >
                    {feature.icon}
                  </IconButton>
                  <Box>
                    <Typography variant="h6" color="primary.main">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Featured Products */}
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" gutterBottom>
              Featured Products
            </Typography>
            <Grid container spacing={4}>
              {featuredProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.title}
                      sx={{ objectFit: 'contain', p: 2 }}
                    />
                    <CardContent>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                        {product.tag && (
                          <Chip 
                            label={product.tag} 
                            color="primary" 
                            size="small" 
                          />
                        )}
                      </Stack>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {product.title}
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Rating value={product.rating} precision={0.5} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary">
                          ({product.reviews})
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                        <Typography variant="h6" color="primary">
                          ₹{product.price}
                        </Typography>
                        {product.oldPrice && (
                          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                            ₹{product.oldPrice}
                          </Typography>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Newsletter Section with Enhanced Design */}
        <Box 
          sx={{ 
            bgcolor: 'primary.main',
            color: 'white',
            py: 10,
            background: 'linear-gradient(135deg, #1B4965 0%, #62B6CB 100%)',
          }}
        >
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <VerifiedIcon sx={{ fontSize: 50, mb: 2, color: 'secondary.light' }} />
            <Typography variant="h3" gutterBottom fontWeight="bold">
              Join Our Community
            </Typography>
            <Typography sx={{ mb: 4, opacity: 0.9 }}>
              Subscribe to receive updates, access to exclusive deals, and more.
            </Typography>
            <Box 
              component="form" 
              sx={{ 
                display: 'flex', 
                gap: 2, 
                maxWidth: 500, 
                mx: 'auto',
                flexDirection: { xs: 'column', sm: 'row' }
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '12px 20px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '1rem',
                }}
              />
              <Button 
                variant="contained"
                color="secondary"
                size="large"
                sx={{ 
                  px: 4,
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
