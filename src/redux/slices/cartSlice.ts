import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';

// ===== Interface Cart Item =====
export interface CartItem {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
}

// ===== Interface State =====
interface CartState {
  items: CartItem[]; // semua item yang ada di cart
  checkoutItems: CartItem[]; // item yang dipindahkan ke checkout
}

// ===== Initial State =====
const initialState: CartState = {
  items: [],
  checkoutItems: [],
};

// ===== Slice =====
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // ===== Tambah item ke cart =====
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const exist = state.items.find((x) => x.id === item.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // ===== Hapus item dari cart =====
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    // ===== Clear semua item di cart =====
    clearCart: (state) => {
      state.items = [];
    },

    // ===== Simpan item yang akan di checkout =====
    setCheckoutItems: (state, action: PayloadAction<CartItem[]>) => {
      const selected = action.payload;

      // Jika user memilih item tertentu, pakai itu
      if (selected.length > 0) {
        state.checkoutItems = selected;
      }
      // Jika tidak ada selection, otomatis masukkan seluruh cart
      else {
        state.checkoutItems = state.items;
      }
    },

    // ===== Clear checkoutItems (opsional, setelah selesai checkout) =====
    clearCheckoutItems: (state) => {
      state.checkoutItems = [];
    },
  },
});

// ===== Persist Config untuk Redux Persist =====
const cartPersistConfig = {
  key: 'cart',
  storage,
};

// ===== Export Reducer dan Actions =====
export const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);

export const {
  addToCart,
  removeFromCart,
  clearCart,
  setCheckoutItems,
  clearCheckoutItems,
} = cartSlice.actions;
