import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const ProductImage = styled(CardMedia)({
  height: 200,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
});

const ProductCard = ({ product }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openComposition, setOpenComposition] = useState(false);

  // Create image paths that work in both development and production
  const getImagePath = (path) => {
    return path.startsWith('http') ? path : `${process.env.PUBLIC_URL}${path}`;
  };

  const handleImageError = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/assets/images/placeholder.png';
  };

  const handleImageClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCompositionClick = (event) => {
    event.stopPropagation();
    setOpenComposition(true);
  };

  const handleCloseComposition = () => {
    setOpenComposition(false);
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
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>
      <StyledCard>
        <ProductImage
          component="img"
          image={getImagePath(product.image)}
          alt={product.name}
          title={product.name}
          onError={handleImageError}
          onClick={handleImageClick}
          sx={{ cursor: 'pointer' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {product.nameHindi}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" sx={{ mb: 1 }}>
            {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" sx={{ mb: 2 }}>
            {product.descriptionHindi}
          </Typography>
          <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" color="primary">
              ₹{product.price}
            </Typography>
            {product.composition && (
              <Button
                startIcon={<InfoOutlinedIcon />}
                onClick={handleCompositionClick}
                size="small"
                color="primary"
              >
                Composition
              </Button>
            )}
          </Box>
        </CardContent>
      </StyledCard>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
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
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={getImagePath(product.image)}
            alt={product.name}
            onError={handleImageError}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'contain',
            }}
          />
        </DialogContent>
      </Dialog>

      {product.composition && (
        <Dialog
          open={openComposition}
          onClose={handleCloseComposition}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <Typography variant="h6">
              {product.name} - {product.nameHindi}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Composition / संरचना
            </Typography>
            <IconButton
              onClick={handleCloseComposition}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'grey.500'
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="subtitle1" gutterBottom color="primary">
              {product.composition.title} / {product.composition.titleHindi}
            </Typography>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Ingredient / सामग्री</TableCell>
                    <TableCell align="right">Quantity / मात्रा</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product.composition.ingredients.map((ingredient, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        <Typography variant="body2">{ingredient.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {ingredient.nameHindi}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">{ingredient.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ProductCard;