import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { addToCart } = useCart();

  // Create image paths that work in both development and production
  const getImagePath = (path) => {
    return path.startsWith('http') ? path : `${process.env.PUBLIC_URL}${path}`;
  };

  const handleImageError = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/assets/images/placeholder.png';
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleImageClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image={getImagePath(product.image)}
          alt={product.name}
          onError={handleImageError}
          onClick={handleImageClick}
          sx={{ 
            objectFit: 'contain', 
            p: 2,
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8,
            }
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>

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
    </>
  );
};

export default ProductCard;