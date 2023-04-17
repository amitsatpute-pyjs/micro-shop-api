import { OrderApiDoc } from "./orders-api";
import { productApiDoc } from "./products-api";

export const apiDoc = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Micro shop API documents",
  },
  paths: { ...OrderApiDoc.paths, ...productApiDoc.paths },
  definitions: {
    ...OrderApiDoc.definitions,
    ...productApiDoc.definitions,
  },
};
