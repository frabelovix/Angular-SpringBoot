import { OrderItem } from "./order-item.model";

export class OrderDto {
    orderId: number;
    orderNo: string;
    customerid: number;
    pMethod: string;
    gTotal: number;
    deletedOrderItemIDs: string;
    orderItems?: OrderItem[];
}
