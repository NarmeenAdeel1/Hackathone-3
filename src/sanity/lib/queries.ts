import { groq } from "next-sanity";

export const allproducts = groq`*[_type == "product"]{
  _id,
  productName, // Check the field name in your Sanity schema
  slug,
  image {
    asset-> { url }
  },
  price,
  quantity,
  tags,
  description,
  features,
  dimensions {
    height,
    width,
    depth
  },
  category->{
    title
  }
}`;
