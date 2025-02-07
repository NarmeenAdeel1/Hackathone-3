import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { category } from "./category"; // 👈 Import category
import order from "./order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category, order], // 👈 category ko yahan add karein
};
