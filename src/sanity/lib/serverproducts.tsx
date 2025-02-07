import { sanityFetch } from "@/sanity/lib/live";

const allProductsQuery = `*[_type == "product"]{
  _id,
  productName,  // 'name' ko 'productName' se replace kiya
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

export async function getProducts() {
  const data = await sanityFetch({ query: allProductsQuery });
  console.log("Fetched Products:", data);  // Data ko console par print karenge
  return data;
}
