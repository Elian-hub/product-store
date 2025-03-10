import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Snackbar,
  Alert,
  CssBaseline,
} from '@mui/material';
import { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const { createProduct } = useProductStore();

  // Snackbar State
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // "success" | "error"

  const handleProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    // Show Snackbar with relevant message
    setSnackbarMessage(message);
    setSnackbarSeverity(success === 'true' ? 'success' : 'error');
    setSnackbarOpen(true);

    if (success === 'true') {
      setNewProduct({ name: '', price: '', image: '' }); // Clear form on success
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'rgba(10, 10, 10, 1)',
          height: '100vh',
          width: '100vw',
          position: 'relative',
          top: 0,
          left: 0,
          margin: 0,
          pt: 6,
        }}
      >
        <Box>
          <Stack spacing={2} alignItems='center' sx={{ mt: 4 }}>
            <Typography
              sx={{
                typography: { xs: 'h5', md: 'h4' },
                fontWeight: 'bold !important',
                color: 'orange',
                textAlign: 'center',
              }}
            >
              Create a Product
            </Typography>
            <Stack
              borderRadius='1.5rem'
              spacing={2}
              width='100%'
              maxWidth={{ xs: '200px', sm: '250px', md: '350px' }}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                px: 4,
                py: 4,
              }}
            >
              <TextField
                label='Name'
                variant='outlined'
                fullWidth
                placeholder='name'
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: 'transparent',
                    '&.Mui-focused': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'orange',
                      },
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'grey',
                    '&.Mui-focused': {
                      color: 'orange',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'grey',
                  },
                }}
              />
              <TextField
                label='Price'
                variant='outlined'
                fullWidth
                placeholder='price'
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: 'transparent',
                    '&.Mui-focused': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'orange',
                      },
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'grey',
                    '&.Mui-focused': {
                      color: 'orange',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'grey',
                  },
                }}
              />
              <TextField
                label='Image URL'
                variant='outlined'
                fullWidth
                placeholder='image URL'
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: 'transparent',
                    '&.Mui-focused': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'orange',
                      },
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'grey',
                    '&.Mui-focused': {
                      color: 'orange',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'grey',
                  },
                }}
              />
            </Stack>

            <Button
              variant='contained'
              sx={{ backgroundColor: 'orange', borderRadius: '12px' }}
              onClick={handleProduct}
            >
              Create Product
            </Button>
          </Stack>
        </Box>

        {/* Snackbar Component for Messages */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            severity={snackbarSeverity}
            onClose={() => setSnackbarOpen(false)}
            variant='filled'
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default CreatePage;
