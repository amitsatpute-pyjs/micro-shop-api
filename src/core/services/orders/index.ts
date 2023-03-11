import { AddOrder, Orders, UpdateOrders } from "boundary/orders";
import { sendServiceRequest } from "../../utils";
import dotenv from "dotenv";

dotenv.config();

export async function getOrders(): Promise<Orders[]> {
  console.log(`${process.env.ORDER_SERVICE}/orders`);
  const response = await sendServiceRequest(
    `${process.env.ORDER_SERVICE}/orders`,
    "GET"
  );
  const data = await response.json();
  const dataSerialized = <Orders[]>data;
  return dataSerialized;
}

export async function orderById(id: string): Promise<Orders | any> {
  const response = await sendServiceRequest(
    `${process.env.ORDER_SERVICE}/order/${id}`,
    "GET"
  );

  const data = await response.json();
  const dataSerialized = <Orders>data;
  return dataSerialized;
}

export async function addOrder(orderObj: AddOrder): Promise<any> {
  const response = await sendServiceRequest(
    `${process.env.ORDER_SERVICE}/addorder`,
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
    `${process.env.ORDER_SERVICE}/updateorder/${orderId}`,
    "PUT",
    orderObj
  );
  const data = await response.json();
  return data;
}

export async function deleteOrder(orderId: string): Promise<any> {
  const response = await sendServiceRequest(
    `${process.env.ORDER_SERVICE}/deleteorder/${orderId}`,
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
