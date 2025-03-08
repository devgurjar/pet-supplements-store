import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Chip, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event, newLanguage) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
    }
  };

  const posts = blogPosts[language];
  const isHindi = language === 'hi';

  return (
    <>
      <Helmet>
        <title>{isHindi ? 'पशु चिकित्सा ब्लॉग - iVet Store' : 'Veterinary Health Blog - iVet Store'}</title>
        <meta 
          name="description" 
          content={isHindi 
            ? "पशु स्वास्थ्य, पोषण और पशु चिकित्सा पूरक पर विशेषज्ञ लेख। पशु स्वास्थ्य में नवीनतम विकास के बारे में जानें।"
            : "Expert articles on livestock health, nutrition, and veterinary supplements. Learn about the latest developments in animal healthcare."
          }
        />
        <meta 
          name="keywords" 
          content="veterinary blog, animal health articles, livestock nutrition, cattle supplements, dairy farming tips" 
        />
      </Helmet>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {isHindi ? 'पशु चिकित्सा ब्लॉग' : 'Veterinary Health Blog'}
          </Typography>
          
          <ToggleButtonGroup
            value={language}
            exclusive
            onChange={handleLanguageChange}
            aria-label="language"
          >
            <ToggleButton value="en" aria-label="english">
              English
            </ToggleButton>
            <ToggleButton value="hi" aria-label="hindi">
              हिंदी
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Typography variant="subtitle1" color="text.secondary" paragraph>
          {isHindi 
            ? 'पशु स्वास्थ्य, पोषण और पशु चिकित्सा पूरक पर विशेषज्ञ जानकारी'
            : 'Expert insights on animal health, nutrition, and veterinary supplements'
          }
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {posts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Card 
                component={Link} 
                to={`/blog/${post.slug}`}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label={post.category} 
                      size="small" 
                      color="primary" 
                      sx={{ mr: 1 }} 
                    />
                    <Typography variant="caption" color="text.secondary">
                      {post.date} • {post.readTime}
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Blog; 