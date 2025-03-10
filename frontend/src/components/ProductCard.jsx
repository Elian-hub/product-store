import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { Edit, Delete } from '@mui/icons-material';
import { useProductStore } from '../store/product';
const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();

  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    console.log('Response', { success, message });
  };

  const handleEdit = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateProduct = async (pid, updatedProduct) => {
    await updateProduct(pid, updatedProduct);
    console.log('Updated product:', updatedProduct);
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ width: '380px', backgroundColor: 'black', opacity: 0.9 }}>
        <CardMedia
          component='img'
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'cover', height: 150 }}
        />
        <CardContent>
          <Typography variant='h6' color='white'>
            {product.name}
          </Typography>
          <Typography variant='body1' color='white'>
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={handleEdit}>
            <Edit sx={{ color: 'green', opacity: 0.7 }} />
          </IconButton>
          <IconButton onClick={() => handleDeleteProduct(product._id)}>
            <Delete sx={{ color: 'red', opacity: 0.7 }} />
          </IconButton>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            width: '450px',
            border: '12px',
          },
        }}
      >
        <DialogTitle
          sx={{ backgroundColor: 'rgba(0,0,0,0.9)', color: 'orange' }}
        >
          Update Product
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
          <TextField
            label='Name'
            fullWidth
            value={updatedProduct.name}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, name: e.target.value })
            }
            margin='dense'
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&.Mui-focused': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'orange',
                  },
                },
              },
              '& .MuiInputLabel-root': {
                color: 'grey',
                '&.Mui-focused': {
                  color: 'white',
                },
              },
              '& .MuiInputBase-input': {
                color: 'grey',
              },
            }}
          />
          <TextField
            label='Price'
            fullWidth
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, price: e.target.value })
            }
            margin='dense'
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&.Mui-focused': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'orange',
                  },
                },
              },
              '& .MuiInputLabel-root': {
                color: 'grey',
                '&.Mui-focused': {
                  color: 'white',
                },
              },
              '& .MuiInputBase-input': {
                color: 'grey',
              },
            }}
          />
          <TextField
            label='Image URL'
            fullWidth
            value={updatedProduct.image}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, image: e.target.value })
            }
            margin='dense'
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&.Mui-focused': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'orange',
                  },
                },
              },
              '& .MuiInputLabel-root': {
                color: 'grey',
                '&.Mui-focused': {
                  color: 'white',
                },
              },
              '& .MuiInputBase-input': {
                color: 'grey',
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
          <Button
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            color='success'
            variant='contained'
            sx={{ borderRadius: '12px' }}
          >
            Update
          </Button>
          <Button
            onClick={handleClose}
            color='error'
            variant='contained'
            sx={{ borderRadius: '12px' }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductCard;
