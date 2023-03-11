import { Products } from "boundary/products";


export interface Orders {
    id: string;
    productIds:Products[];
    userId: string;
    totalCost: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AddOrder {
    userId: string;
    totalCost: number;
    productIds: string[];
  }

export interface UpdateOrders{
    productIds?:string[];
    userId?: string;
    totalCost?: number;
    createdAt?: Date;
    updatedAt?: Date;
}