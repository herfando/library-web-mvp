import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../services/08_cartService';
import type {
  AddToCartPayload,
  UpdateCartItemPayload,
  Cart,
} from '../types/08_cartTypes';

// === GET CART ===
export function useCart() {
  return useQuery<Cart>({
    queryKey: ['cart'],
    queryFn: cartService.getCart,
  });
}

// === ADD ITEM ===
export function useAddToCart() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: AddToCartPayload) => cartService.addToCart(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
  });
}

// === UPDATE ITEM ===
export function useUpdateCartItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateCartItemPayload }) =>
      cartService.updateItem(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
  });
}

// === REMOVE ITEM ===
export function useRemoveCartItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => cartService.removeItem(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
  });
}

// === CLEAR CART ===
export function useClearCart() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: () => cartService.clearCart(),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
  });
}
