import { IProduct } from "./Iproduct";

export interface IOrders {
    id: number,
    status: string,
    date: Date,
    products: IProduct[]
}