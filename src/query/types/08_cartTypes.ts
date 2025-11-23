// === 1. CartItem interface ===
export interface CartItem {
  id: number;
  bookId: number;
  quantity: number;
  price: number;
  title: string;
  thumbnail: string;
}

// === 2. Cart interface ===
export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

// === 3. Payload add item ===
export interface AddToCartPayload {
  bookId: number;
  quantity: number;
}

// === 4. Payload update item ===
export interface UpdateCartItemPayload {
  quantity: number;
}
