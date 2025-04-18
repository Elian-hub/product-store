import { create } from 'zustand';

const API_BASE_URL = "https://product-store-backend-vl7q.onrender.com/api/products";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: 'false', message: 'Please fill in all fields.' };
    }
    const res = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: 'true', message: 'Product created successfully!' };
  },

  fetchProducts: async () => {
    const res = await fetch(`${API_BASE_URL}`);
    const data = await res.json();
    set({ products: data.data });
  },

  deleteProduct: async (pid) => {
    const res = await fetch(`${API_BASE_URL}/${pid}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // Update UI without refreshing
    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));
    return { success: true, message: data.message };
  },

  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`${API_BASE_URL}/${pid}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    console.log('Server response:', data);
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.map((product) =>
        product._id === pid ? data.data : product
      ),
    }));
    return data.data;
  },
}));
