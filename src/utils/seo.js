export const generateProductUrl = (product) => {
  return `/products/${product.category}/${product.slug}`;
};

export const generateMetaDescription = (product) => {
  return `Buy ${product.name} - ${product.shortDescription}. Premium quality pet supplements at iVet Store. Free shipping on orders over $50.`;
};

export const generateCanonicalUrl = (path) => {
  return `https://ivetstore.com${path}`;
}; 