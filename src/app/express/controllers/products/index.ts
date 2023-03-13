import {
  addProduct,
  deleteProduct,
  getProducts,
  productById,
  updateProduct,
} from "../../../../core/services/products";
import { NextFunction, Request, Response } from "express";

export async function getProductsList(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await getProducts();
  res.json(data);
}

export async function addNewProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await addProduct(req.body);
  res.json(data);
}

export async function getProductById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const product = await productById(req.params.id);
  res.json(product);
}

export async function deleteProductById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const product = await deleteProduct(req.params.id);
  res.json(product);
}

export async function updateProductById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const product = await updateProduct(req.params.id, req.body);
  res.json(product);
}
