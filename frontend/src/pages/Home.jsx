import { Box, Typography, Grid2, CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
const Home = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log('products', products);
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'rgba(10, 10, 10, 1)',
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          pt: 6,
        }}
      >
        <Typography
          sx={{
            typography: { xs: 'h5', md: 'h4' },
            color: 'orange',
            fontWeight: 'bold !important',
            textAlign: 'center',
            mt: 4,
          }}
        >
          Current Products
        </Typography>

        <Grid2
          container
          spacing={4}
          mt={4}
          sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
          {products.map((product) => (
            <Grid2 item xs={12} md={6} lg={4}>
              <ProductCard key={product._id} product={product} />
            </Grid2>
          ))}
          ;
        </Grid2>

        {products?.length === 0 && (
          <Typography variant='h6' color='white' textAlign='center' mt={6}>
            No products?{''}
            <Link to='/create' style={{ textDecoration: 'none' }}>
              <span style={{ color: 'grey' }}> Create a Product</span>
            </Link>
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Home;
