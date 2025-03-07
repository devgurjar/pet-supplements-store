import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';

const ProductImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0,
  },
}));

const Product = ({ product }) => {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "iVet Store"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://ivetstore.com/products/${product.slug}`,
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <article>
      <Helmet>
        <title>{`${product.name} - iVet Store`}</title>
        <meta name="description" content={product.description} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <ProductCard>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <figure>
                <ProductImage 
                  src={product.imageUrl} 
                  alt={product.name} 
                  loading="lazy" 
                />
              </figure>
            </Grid>
            <Grid item xs={12} md={6}>
              <header>
                <Typography 
                  component="h1" 
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' }
                  }}
                >
                  {product.name}
                </Typography>
              </header>
              
              <Typography 
                component="p" 
                variant="body1"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                {product.description}
              </Typography>
              
              <footer>
                <Typography 
                  component="p" 
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    marginTop: 2
                  }}
                >
                  ${product.price}
                </Typography>
              </footer>
            </Grid>
          </Grid>
        </CardContent>
      </ProductCard>
    </article>
  );
};

export default Product; 