import { AddOrder, Orders, UpdateOrders } from "boundary/orders";
import { sendServiceRequest } from "../../utils";
import dotenv from "dotenv";
import { AddProduct, Products, UpdateProduct } from "boundary/products";

dotenv.config();
const productServiceUrl = process.env.PRODUCT_SERVICE

export async function getProducts(): Promise<Products[]> {
  console.log(`${productServiceUrl}/products`);
  const response = await sendServiceRequest(
    `${productServiceUrl}/products`,
    "GET"
  );
  const data = await response.json();
  const dataSerialized = <Products[]>data;
  return dataSerialized;
}

export async function productById(id: string): Promise<Products | any> {
  const response = await sendServiceRequest(
    `${productServiceUrl}/product/${id}`,
    "GET"
  );

  const data = await response.json();
  const dataSerialized = <Products>data;
  return dataSerialized;
}

export async function addProduct(productObj: AddProduct): Promise<any> {
  const response = await sendServiceRequest(
    `${productServiceUrl}/addproduct`,
    "POST",
    productObj
  );

  const data = await response.json();
  return data;
}

export async function updateProduct(
  productId: string,
  productObj: UpdateProduct
): Promise<any> {
  const response = await sendServiceRequest(
    `${productServiceUrl}/updateproduct/${productId}`,
    "PUT",
    productObj
  );
  const data = await response.json();
  return data;
}

export async function deleteProduct(productId: string): Promise<any> {
  const response = await sendServiceRequest(
    `${productServiceUrl}/deleteproduct/${productId}`,
    "DELETE"
  );
  const data = await response.json();
  return data;
}
