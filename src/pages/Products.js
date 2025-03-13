import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard/ProductCard';
import { productsData } from '../data/productsData';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  const products = Object.values(productsData);

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
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
      }
    }))
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Helmet>
        <title>Our Products - iVet Store</title>
        <meta name="description" content="Browse our range of high-quality veterinary supplements and animal healthcare products. Premium quality products for livestock and pets." />
        <meta name="prerender-status-code" content="200" />
        <link rel="canonical" href="https://ivetstore.com/products" />
      </Helmet>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
