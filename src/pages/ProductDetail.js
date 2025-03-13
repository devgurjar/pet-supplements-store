import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Helmet } from 'react-helmet-async';
import { productsData } from '../data/productsData';

const ProductDetail = () => {
  const { productId } = useParams();
  const [openImageDialog, setOpenImageDialog] = useState(false);
  
  const product = productsData[productId];
  console.log('Found product:', product);

  if (!product) {
    console.log('Product not found, redirecting...');
    return <Navigate to="/products" replace />;
  }

  const handleImageClick = () => {
    setOpenImageDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenImageDialog(false);
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `https://ivetstore.com${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": "iVet Store"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://ivetstore.com/products/${product.id}`,
      "priceCurrency": "INR",
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Helmet>
        <title>{`${product.name} - iVet Store`}</title>
        <meta name="description" content={product.description} />
        <meta name="prerender-status-code" content="200" />
        <link rel="canonical" href={`https://ivetstore.com/products/${product.id}`} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 2, 
              mb: 2,
              cursor: 'pointer',
              '&:hover': {
                boxShadow: 6,
              }
            }}
            onClick={handleImageClick}
          >
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 500,
                objectFit: 'contain',
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {product.nameHindi}
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            ₹{product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.descriptionHindi}
          </Typography>
          
          {product.composition && (
            <Paper elevation={1} sx={{ p: 3, mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Composition
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {product.composition.title}
              </Typography>
              {product.composition.ingredients.map((ingredient, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">
                    {ingredient.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {ingredient.value}
                  </Typography>
                </Box>
              ))}
            </Paper>
          )}
        </Grid>
      </Grid>

      {/* Image Dialog */}
      <Dialog
        open={openImageDialog}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '90vh',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ProductDetail; 