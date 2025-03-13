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
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (!openDialog && !openComposition) {
      navigate(`/products/${product.id}`);
    }
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDialog(true);
  };

  const handleCompositionClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenComposition(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
      <StyledCard 
        onClick={handleCardClick}
        sx={{ 
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 4,
          }
        }}
      >
        <Box className="product-image">
          <ProductImage
            component="img"
            image={product.image}
            alt={product.name}
            title={product.name}
            onClick={handleImageClick}
            sx={{ cursor: 'zoom-in' }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {product.nameHindi}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {product.description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" color="primary">
              ₹{product.price}
            </Typography>
            <Button
              className="composition-button"
              size="small"
              onClick={handleCompositionClick}
              startIcon={<InfoOutlinedIcon />}
            >
              Composition
            </Button>
          </Box>
        </CardContent>
      </StyledCard>

      {/* Image Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: 'auto', maxHeight: '80vh' }}
          />
        </DialogContent>
      </Dialog>

      {/* Composition Dialog */}
      <Dialog open={openComposition} onClose={handleCloseComposition}>
        <DialogTitle>
          Composition
          <IconButton
            aria-label="close"
            onClick={handleCloseComposition}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Component</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.composition?.ingredients.map((ingredient, index) => (
                  <TableRow key={index}>
                    <TableCell>{ingredient.name}</TableCell>
                    <TableCell align="right">{ingredient.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;