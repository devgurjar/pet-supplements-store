import React from 'react';
import { Container, Typography, Box, Chip, Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPostContent } from '../../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Determine language based on slug
  const language = slug.includes('-pashu-') ? 'hi' : 'en';
  const post = blogPostContent[language][slug];

  if (!post) {
    navigate('/blog');
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - iVet Store Blog</title>
        <meta name="description" content={post.content.substring(0, 160)} />
        {language === 'hi' && <html lang="hi" />}
      </Helmet>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Chip label={post.category} color="primary" sx={{ mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom>
            {post.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {language === 'hi' ? 'लेखक:' : 'By'} {post.author}, {post.authorTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.date} • {post.readTime}
            </Typography>
          </Box>
          <Divider />
        </Box>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Container>
    </>
  );
};

export default BlogPost; 