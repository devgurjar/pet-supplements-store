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
  Chip,
  useTheme,
  useMediaQuery
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
import { styled } from '@mui/material/styles';

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
  "logo": {
    "@type": "ImageObject",
    "url": "https://ivetstore.com/assets/images/logo.png",
    "width": "512",
    "height": "512",
    "contentUrl": "https://ivetstore.com/assets/images/logo.png",
    "encodingFormat": "image/png",
    "caption": "iVet Store Logo"
  },
  "image": [
    "https://ivetstore.com/assets/images/logo.png",
    "https://ivetstore.com/assets/images/og-image.jpg"
  ],
  "description": "iVet Store is your vet-powered, pet wellness marketplace with over 50 years of animal health experience. We provide a complete line of premium veterinary supplements and pet wellness products.",
  "slogan": "Premium veterinary supplements supplier in India",
  "foundingDate": "1973",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "W-176, W Block, Shatabdipuram",
    "addressLocality": "Gwalior",
    "addressRegion": "MP",
    "postalCode": "474005",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9165034609",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  }
};

const BannerContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1B4965 30%, #62B6CB 90%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
    textAlign: 'center'
  }
}));

const BannerContent = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  }
}));

const BannerImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  objectFit: 'cover',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    height: '200px',
    width: '100%',
    margin: '0 auto',
    display: 'block'
  },
  [theme.breakpoints.up('md')]: {
    height: '400px',
  }
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <BannerContainer>
        <BannerContent>
          <Grid 
            container 
            spacing={4} 
            alignItems="center"
            direction={isMobile ? 'column-reverse' : 'row'}
          >
            <Grid item xs={12} md={6}>
              <Typography 
                variant={isMobile ? "h4" : "h3"} 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  mb: { xs: 2, md: 4 },
                  mt: { xs: 3, md: 0 }
                }}
              >
                Premium Veterinary Supplements for Livestock
              </Typography>
              <Typography 
                variant={isMobile ? "body1" : "h6"}
                paragraph
                sx={{ 
                  mb: { xs: 3, md: 4 },
                  px: { xs: 2, md: 0 }
                }}
              >
                Enhance your livestock's health with our high-quality mineral mixtures and supplements
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: 2,
                justifyContent: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                px: { xs: 3, md: 0 }
              }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size={isMobile ? "large" : "large"}
                  component={Link}
                  to="/products"
                  fullWidth={isMobile}
                  sx={{ 
                    minWidth: { xs: '100%', sm: 'auto' },
                    mb: { xs: 2, sm: 0 }
                  }}
                >
                  View Products
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit"
                  size={isMobile ? "large" : "large"}
                  component={Link}
                  to="/contact"
                  fullWidth={isMobile}
                  sx={{ 
                    minWidth: { xs: '100%', sm: 'auto' }
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={6} 
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 2, md: 0 }
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: theme.shape.borderRadius,
                }}
              >
                <BannerImage
                  src="/assets/images/banner-image.jpg"
                  alt="Healthy Livestock"
                  sx={{
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </BannerContent>
      </BannerContainer>

      {/* Welcome Message */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom color="primary">
                Welcome to IVET Store
              </Typography>
              <Typography variant="body1" paragraph>
                IVET Store is your vet-powered, pet wellness marketplace. With over 50 years of animal health experience, 
                we provide a complete line of premium pet wellness products. Our commitment to quality and expertise ensures 
                the best care for your livestock and pets.
              </Typography>
              <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ mt: 4 }}>
                आई-वेट स्टोर में आपका स्वागत है
              </Typography>
              <Typography variant="body1" paragraph>
                आई-वेट स्टोर आपका पशु चिकित्सा-संचालित, पशु स्वास्थ्य बाज़ार है। पशु स्वास्थ्य में 50 वर्षों के अनुभव के साथ, 
                हम उच्च गुणवत्ता वाले पशु स्वास्थ्य उत्पादों की एक पूर्ण श्रृंखला प्रदान करते हैं। गुणवत्ता और विशेषज्ञता के प्रति 
                हमारी प्रतिबद्धता आपके पशुधन और पालतू जानवरों की सर्वोत्तम देखभाल सुनिश्चित करती है।
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/assets/images/about-image.jpg`}
                alt="Veterinary care"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                  mx: 'auto',
                  display: 'block'
                }}
              />
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
    </>
  );
};

export default Home;
