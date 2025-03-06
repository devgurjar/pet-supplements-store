import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

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

      <Card component="section">
        <CardContent>
          <header>
            <Typography component="h1" variant="h4">
              {product.name}
            </Typography>
          </header>
          
          <figure>
            <img src={product.imageUrl} alt={product.name} loading="lazy" />
          </figure>
          
          <Typography component="p" variant="body1">
            {product.description}
          </Typography>
          
          <footer>
            <Typography component="p" variant="h6">
              ${product.price}
            </Typography>
          </footer>
        </CardContent>
      </Card>
    </article>
  );
};

export default Product; 