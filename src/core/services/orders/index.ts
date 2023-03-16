import { AddOrder, Orders, UpdateOrders } from "boundary/orders";
import { sendServiceRequest } from "../../utils";
import dotenv from "dotenv";

dotenv.config();
const orderServiceUrl = process.env.ORDER_SERVICE

export async function getOrders(): Promise<Orders[]> {
  console.log(`${orderServiceUrl}/orders`);
  const response = await sendServiceRequest(
    `${orderServiceUrl}/orders`,
    "GET"
  );
  const data = await response.json();
  const dataSerialized = <Orders[]>data;
  return dataSerialized;
}

export async function orderById(id: string): Promise<Orders | any> {
  const response = await sendServiceRequest(
    `${orderServiceUrl}/order/${id}`,
    "GET"
  );

  const data = await response.json();
  const dataSerialized = <Orders>data;
  return dataSerialized;
}

export async function addOrder(orderObj: AddOrder): Promise<any> {
  const response = await sendServiceRequest(
    `${orderServiceUrl}/addorder`,
    "POST",
    orderObj
  );

  const data = await response.json();
  return data;
}

export async function updateOrder(
  orderId: string,
  orderObj: UpdateOrders
): Promise<any> {
  const response = await sendServiceRequest(
    `${orderServiceUrl}/updateorder/${orderId}`,
    "PUT",
    orderObj
  );
  const data = await response.json();
  return data;
}

export async function deleteOrder(orderId: string): Promise<any> {
  const response = await sendServiceRequest(
    `${orderServiceUrl}/deleteorder/${orderId}`,
    "DELETE"
  );
  const data = await response.json();
  return data;
}

//   export async function getOrderDetails(orderId: string): Promise<Orders> {
//     const order = await knex("orders")
//       .join("users", "orders.userId", "=", "users.id")
//       .select("orders.*", "users.email")
//       .where("orders.id", "=", orderId);
//     const data = generateOrderDetails(order[0]);
//     return data;
//   }
