import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Avatar, Divider } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/material/styles';

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  color: theme.palette.primary.main,
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -16,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 100,
    height: 4,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 2,
  }
}));

const PersonCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
  }
}));

const ProfileImage = styled('img')(({ theme }) => ({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  objectFit: 'cover',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[3],
}));

const AboutUs = () => {
  const management = [
    {
      name: 'Mrs. Vimalesh Kaurav',
      position: 'Founder',
      email: 'bimaleshkaurav6@gmail.com',
      description: 'Social activist',
      image: '/assets/images/team/vimalesh-kaurav.jpg'
    },
    {
      name: 'Mr. Suresh Singh',
      position: 'Chief Executive Officer',
      email: 'Suresh.singh58@yahoo.com',
      description: 'Having an experience of 25 years in field of Animal breeding and nutrition. Team management, Establishment and execution of project.',
      image: '/assets/images/team/suresh-singh.jpg'
    }
  ];

  const research = [
    {
      name: 'Dr. Mool Chand Pal',
      position: 'Research & Development',
      qualification: 'BVSc & AH',
      description: 'Having an experience of 10 years in field of animal genetics, cattle health management, production and scientific feeding of dairy animal.',
      image: '/assets/images/team/moolchand-pal.jpg'
    }
  ];

  const salesTeam = [
    {
      name: 'Mr. Abhishek Rajpoot',
      position: 'Sales Officer',
      contact: '8756644651',
      image: '/assets/images/team/abhishek-rajpoot.jpg'
    },
    {
      name: 'Mr. Akash Mani',
      position: 'Sales Officer',
      contact: '9651371713',
      image: '/assets/images/team/akash-mani.jpg'
    }
  ];

  const objectives = [
    'Increase the productivity of animal and lower the cost of production of animal produces',
    'Providing high quality low cost feed supplements product to farmer',
    'Quality milk production and income generation in rural areas',
    'Improvement of health, reproduction and production of animal',
    'Contribution to doubling of farmer income and India as develop county in 2047'
  ];

  return (
    <>
      <Helmet>
        <title>About Us - I VET</title>
        <meta name="description" content="Learn about I VET's management team, research & development, and our mission to improve animal health and farmer prosperity." />
      </Helmet>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Management Section */}
        <SectionTitle variant="h3" component="h1" gutterBottom>
          Management
        </SectionTitle>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {management.map((person, index) => (
            <Grid item xs={12} md={6} key={index}>
              <PersonCard elevation={3}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <ProfileImage
                    src={person.image}
                    alt={person.name}
                    onError={(e) => {
                      e.target.src = '/assets/images/team/default-avatar.jpg';
                    }}
                  />
                  <Typography variant="h5" gutterBottom color="primary">
                    {person.name}
                  </Typography>
                  <Typography variant="h6" color="secondary" gutterBottom>
                    {person.position}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                    <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography>{person.email}</Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    {person.description}
                  </Typography>
                </CardContent>
              </PersonCard>
            </Grid>
          ))}
        </Grid>

        {/* Research & Development Section */}
        <SectionTitle variant="h3" component="h2" gutterBottom>
          Research & Development
        </SectionTitle>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {research.map((person, index) => (
            <Grid item xs={12} md={6} key={index}>
              <PersonCard elevation={3}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <ProfileImage
                    src={person.image}
                    alt={person.name}
                    onError={(e) => {
                      e.target.src = '/assets/images/team/default-avatar.jpg';
                    }}
                  />
                  <Typography variant="h5" gutterBottom color="primary">
                    {person.name}
                  </Typography>
                  <Typography variant="subtitle1" color="secondary" gutterBottom>
                    {person.qualification}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {person.description}
                  </Typography>
                </CardContent>
              </PersonCard>
            </Grid>
          ))}
        </Grid>

        {/* Sales Team Section */}
        <SectionTitle variant="h3" component="h2" gutterBottom>
          Our Team
        </SectionTitle>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {salesTeam.map((person, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PersonCard elevation={3}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <ProfileImage
                    src={person.image}
                    alt={person.name}
                    onError={(e) => {
                      e.target.src = '/assets/images/team/default-avatar.jpg';
                    }}
                  />
                  <Typography variant="h5" gutterBottom color="primary">
                    {person.name}
                  </Typography>
                  <Typography variant="h6" color="secondary" gutterBottom>
                    {person.position}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography>{person.contact}</Typography>
                  </Box>
                </CardContent>
              </PersonCard>
            </Grid>
          ))}
        </Grid>

        {/* Mission and Objectives Section */}
        <SectionTitle variant="h3" component="h2" gutterBottom>
          Our Mission and Objectives
        </SectionTitle>
        <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3 }}>
          <Grid container spacing={2}>
            {objectives.map((objective, index) => (
              <Grid item xs={12} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      mr: 2,
                    }}
                  />
                  <Typography variant="body1">{objective}</Typography>
                </Box>
                {index < objectives.length - 1 && <Divider sx={{ my: 1 }} />}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AboutUs; 