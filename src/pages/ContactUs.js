import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider 
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import FactoryIcon from '@mui/icons-material/Factory';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Helmet>
        <title>Contact Us - iVet Store</title>
        <meta name="description" content="Get in touch with iVet Store. Find our contact details, office locations and business information." />
        <meta name="prerender-status-code" content="200" />
        <link rel="canonical" href="https://ivetstore.com/contact" />
      </Helmet>
      <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
        Contact Us
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Registered Office"
                  secondary="W-176, W Block, Shatabdipuram, Distt. Gwalior (M.P.) - 474005"
                />
              </ListItem>
              
              <Divider component="li" />
              
              <ListItem>
                <ListItemIcon>
                  <FactoryIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Manufacturing Unit"
                  secondary="Vindawan Green City, Kolua Road, Bansakhedi, Ashoknagar (M.P.) - 473331"
                />
              </ListItem>
              
              <Divider component="li" />
              
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Mobile"
                  secondary="9165034609"
                />
              </ListItem>
              
              <Divider component="li" />
              
              <ListItem>
                <ListItemIcon>
                  <EmailIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary="mahendraashoknagar@gmail.com"
                />
              </ListItem>
              
              <Divider component="li" />
              
              <ListItem>
                <ListItemIcon>
                  <BusinessIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Business Details"
                  secondary={
                    <>
                      <Typography component="span" display="block">
                        GSTIN: 23GSOPK8256C1Z1
                      </Typography>
                      <Typography component="span" display="block">
                        UDYAM: MP-04-0010366
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs; 