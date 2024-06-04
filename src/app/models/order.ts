import { OrderItem } from "./order-item";

export interface Order {
    id: string;
    userId: number;
    paymentId: string;
    currency: string;
    total: number;
    tax: number;
    grandTotal: number;
    billingAddress: string;
    createdDate: string;
    items: OrderItem[];
}
