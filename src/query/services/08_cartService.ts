import { apiClient } from '../../utils/apiClient';
import { ENDPOINTS } from '../../utils/api';
import type {
  Cart,
  CartItem,
  AddToCartPayload,
  UpdateCartItemPayload,
} from '../types/08_cartTypes';

export const cartService = {
  // === 1. GET CART ===
  getCart: async (): Promise<Cart> => {
    const res = await apiClient.get(ENDPOINTS.CART.GET);
    return res.data.data;
  },

  // === 2. ADD ITEM ===
  addToCart: async (payload: AddToCartPayload): Promise<CartItem> => {
    const res = await apiClient.post(ENDPOINTS.CART.ADD_ITEM, payload);
    return res.data.data;
  },

  // === 3. UPDATE ITEM ===
  updateItem: async (
    id: number,
    payload: UpdateCartItemPayload
  ): Promise<CartItem> => {
    const res = await apiClient.put(ENDPOINTS.CART.UPDATE_ITEM(id), payload);
    return res.data.data;
  },

  // === 4. REMOVE ITEM ===
  removeItem: async (id: number): Promise<{ success: boolean }> => {
    const res = await apiClient.delete(ENDPOINTS.CART.DELETE_ITEM(id));
    return res.data;
  },

  // === 5. CLEAR CART ===
  clearCart: async (): Promise<{ success: boolean }> => {
    const res = await apiClient.delete(ENDPOINTS.CART.CLEAR);
    return res.data;
  },
};
