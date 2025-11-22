export interface CartItem {
  id: number;
  bookId: number;
  quantity: number;
  price: number;
  title: string;
  thumbnail: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface AddToCartPayload {
  bookId: number;
  quantity: number;
}

export interface UpdateCartItemPayload {
  quantity: number;
}
