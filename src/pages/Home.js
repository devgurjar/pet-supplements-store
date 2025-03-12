import React, { useState, useEffect } from 'react';
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/swiper.css';

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
  "name": "I VET",
  "url": "https://ivetstore.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ivetstore.com/assets/images/logo.png",
    "width": "512",
    "height": "512"
  },
  "description": "Leading manufacturer and supplier of veterinary supplements, animal feed, and livestock healthcare products in India.",
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
  },
  "sameAs": [
    "https://facebook.com/ivetstore",
    "https://twitter.com/ivetstore",
    "https://instagram.com/ivetstore"
  ]
};

const SlideImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  display: 'block',
  backgroundColor: '#f5f5f5',
}));

const SlideShow = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100vw',
  height: theme.breakpoints.down('sm') ? '400px' : '600px',
  overflow: 'hidden',
  marginBottom: theme.spacing(4),
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  '& .swiper': {
    height: '100%',
    width: '100%',
  },
  '& .swiper-slide': {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);

  const styles = {
    '.swiper-pagination-bullet': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      opacity: 1,
      '&.swiper-pagination-bullet-active': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    '.swiper-button-next, .swiper-button-prev': {
      color: theme.palette.primary.main,
    },
  };

  const slideImages = [
    {
      url: `${process.env.PUBLIC_URL}/assets/images/slides/slide1.jpg`,
      title: 'Premium Veterinary Products',
      description: 'High-quality supplements for your livestock'
    },
    {
      url: `${process.env.PUBLIC_URL}/assets/images/slides/slide2.jpg`,
      title: 'Expert Care Solutions',
      description: 'Professional healthcare for animals'
    },
    {
      url: `${process.env.PUBLIC_URL}/assets/images/slides/slide3.jpg`,
      title: 'Complete Animal Nutrition',
      description: 'Balanced nutrition for optimal health'
    },
    {
      url: `${process.env.PUBLIC_URL}/assets/images/slides/slide4.jpg`,
      title: 'Happy Farmer',
      description: 'Happy Farmer'
    }
  ];

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Helmet>
        <title>I VET - Premium Veterinary Supplements & Animal Healthcare Products</title>
        <meta name="description" content="Leading manufacturer and supplier of veterinary supplements, animal feed, and livestock healthcare products in India. GST registered firm offering quality animal nutrition solutions." />
        <link rel="canonical" href="https://ivetstore.com" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <SlideShow>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <SlideImage
                  src={slide.url}
                  alt={`${slide.title} - I VET Animal Healthcare Products`}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${slide.url}`);
                    e.target.src = `${process.env.PUBLIC_URL}/assets/images/banner-image.jpg`;
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideShow>

      {/* Welcome Message */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom color="primary">
                Welcome to I VET
              </Typography>
              <Typography variant="body1" paragraph>
                I VET is an innovative young proprietorship firm registered under Government of India 
                with GST REG-06 registration number – 23GSOPK8256C1ZI, and registered with Ministry 
                of Micro Small and Medium Enterprises (UDYAM registration number: UDYAM-MOP-04-0010366).
              </Typography>
              <Typography variant="body1" paragraph>
                We specialize in trading and manufacturing of animal feed, wholesale of straw, fodder 
                and other animal feeds. Our services extend to poultry feed and animal production 
                related activities, as well as wholesale of agricultural raw materials and live 
                animals trade.
              </Typography>
              <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ mt: 4 }}>
                आई वेट में आपका स्वागत है
              </Typography>
              <Typography variant="body1" paragraph>
                आई वेट भारत सरकार के तहत पंजीकृत एक नवीन युवा स्वामित्व फर्म है, जिसका 
                GST REG-06 पंजीकरण संख्या – 23GSOPK8256C1ZI है, और सूक्ष्म, लघु और मध्यम उद्यम 
                मंत्रालय में पंजीकृत है (उद्यम पंजीकरण संख्या: UDYAM-MOP-04-0010366)।
              </Typography>
              <Typography variant="body1" paragraph>
                हम पशु आहार के व्यापार और निर्माण, भूसा, चारा और अन्य पशु आहार के थोक व्यापार में 
                विशेषज्ञता रखते हैं। हमारी सेवाओं में पोल्ट्री फीड और पशु उत्पादन संबंधी गतिविधियां, 
                साथ ही कृषि कच्चे माल और जीवित पशुओं का थोक व्यापार शामिल है।
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
