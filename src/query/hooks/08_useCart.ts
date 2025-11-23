import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../services/08_cartService';
import type {
  AddToCartPayload,
  UpdateCartItemPayload,
  Cart,
} from '../types/08_cartTypes';

// === 1. Get cart ===
export function useCart() {
  return useQuery<Cart>({
    queryKey: ['cart'],
    queryFn: cartService.getCart,
  });
}

// === 2. Add item to cart ===
export function useAddToCart() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: AddToCartPayload) => cartService.addToCart(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
  });
}

// === 3. Update cart item ===
export function useUpdateCartItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateCartItemPayload }) =>
      cartService.updateItem(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
  });
}

// === 4. Remove item from cart ===
export function useRemoveCartItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => cartService.removeItem(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
  });
}

// === 5. Clear cart ===
export function useClearCart() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: () => cartService.clearCart(),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
  });
}
