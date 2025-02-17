import { CartItem } from "./cart-item";

export class Payment {
    paymentId?: string;
  signature?: string;
  orderId?: string;
  tax?: number;
  currency?: string;
  total?: number;
  email?: string;
  cartId?: string;
  items?: CartItem[];
  userId?: number;
  grandTotal?: number;

}
