import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardMedia, 
  Dialog,
  DialogContent,
  IconButton,
  Box,
  CardContent
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[4],
  },
}));

const MediaImage = styled(CardMedia)({
  height: 250,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const Media = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const mediaItems = [
    {
      id: 1,
      image: '/assets/images/media/event1.jpeg',
      title: 'Product Launch Event',
      description: 'Launch of our new product line'
    },
    {
      id: 2,
      image: '/assets/images/media/event2.jpeg',
      title: 'Veterinary Conference',
      description: 'Annual veterinary conference 2024'
    },
    {
      id: 3,
      image: '/assets/images/media/event3.jpeg',
      title: 'Farmer Training Program',
      description: 'Educational session on livestock health management'
    },
    {
      id: 4,
      image: '/assets/images/media/event4.jpeg',
      title: 'Research Symposium',
      description: 'Latest developments in veterinary supplements'
    }
  ];

  const handleImageError = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/assets/images/placeholder.png`;
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedImage(null);
  };

  const getImagePath = (path) => {
    const fullPath = path.startsWith('http') ? path : `${process.env.PUBLIC_URL}${path}`;
    console.log('Loading image from:', fullPath);
    return fullPath;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Media Gallery
      </Typography>
      <Grid container spacing={3}>
        {mediaItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <StyledCard onClick={() => handleImageClick(item)}>
              <MediaImage
                component="img"
                src={getImagePath(item.image)}
                alt={item.title}
                onError={handleImageError}
                sx={{ height: 250, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

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
          {selectedImage && (
            <Box
              component="img"
              src={getImagePath(selectedImage.image)}
              alt={selectedImage.title}
              onError={handleImageError}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '80vh',
                objectFit: 'contain',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Media; 