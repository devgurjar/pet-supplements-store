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
    title: 'Premium Calcium Supplement',
    price: 999,
    oldPrice: 1299,
    rating: 4.5,
    reviews: 128,
    image: `${process.env.PUBLIC_URL}/assets/images/I-cal-plus.png`,
    tag: 'Best Seller'
  },
  // Add more featured products...
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

const Home = () => {
  return (
    <Box>
      {/* Hero Banner with Logo Background */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, rgba(27, 73, 101, 0.95) 0%, rgba(98, 182, 203, 0.95) 100%),
                      url(${process.env.PUBLIC_URL}/assets/images/logo.png)`,
          backgroundSize: '600px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          py: { xs: 4, md: 8 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            zIndex: 1
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container alignItems="center" spacing={4}>
            <Grid 
              item 
              xs={12} 
              md={6} 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                order: { xs: 2, md: 1 }
              }}
            >
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/assets/images/hero-product.png`}
                alt="Featured Product"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))',
                  transform: 'scale(1.1)',
                  mx: 'auto',
                  display: 'block',
                  position: 'relative',
                  zIndex: 2
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Box sx={{ 
                color: 'white', 
                textAlign: { xs: 'center', md: 'left' },
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
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
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
        <Container>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h3" color="primary.main" gutterBottom>
              Featured Products
            </Typography>
            <Typography color="text.secondary">
              Top-rated supplements for your animals
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {featuredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    position: 'relative',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                    }
                  }}
                >
                  {product.tag && (
                    <Chip
                      label={product.tag}
                      color="secondary"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 1,
                      }}
                    />
                  )}
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{ p: 2, objectFit: 'contain' }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom noWrap>
                      {product.title}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                      <Rating value={product.rating} precision={0.5} size="small" readOnly />
                      <Typography variant="body2" color="text.secondary">
                        ({product.reviews})
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="h6" color="primary.main">
                        ₹{product.price}
                      </Typography>
                      {product.oldPrice && (
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ textDecoration: 'line-through' }}
                        >
                          ₹{product.oldPrice}
                        </Typography>
                      )}
                    </Stack>
                    <Button 
                      variant="contained" 
                      fullWidth 
                      sx={{ mt: 2 }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 10 }}>
        <Container>
          <Typography 
            variant="h3" 
            textAlign="center" 
            gutterBottom
            color="primary.main"
            sx={{ 
              mb: 6,
              fontWeight: 'bold',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                bgcolor: 'secondary.main',
                borderRadius: 2,
              }
            }}
          >
            Shop by Category
          </Typography>
          <Grid container spacing={4}>
            {categories.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  component={Link} 
                  to={category.link}
                  sx={{ 
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      '& img': {
                        transform: 'scale(1.1)',
                      }
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={category.image}
                    alt={category.title}
                    sx={{
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <CardContent sx={{ textAlign: 'center', bgcolor: 'background.paper' }}>
                    <Typography variant="h5" color="primary.main">
                      {category.title}
                    </Typography>
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
  );
};

export default Home;
