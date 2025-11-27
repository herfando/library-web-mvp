import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';

export interface CartItem {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const exist = state.items.find((x) => x.id === item.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

const cartPersistConfig = {
  key: 'cart',
  storage,
};

export const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
