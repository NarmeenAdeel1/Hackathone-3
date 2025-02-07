import { client } from "@/sanity/lib/client"; 
import { groq } from "next-sanity"; 
import { Slug } from "sanity"; 
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// Type
interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  image: { asset: { _ref: string } };
  price: string;
  description: string;
  
}

interface ProductPageProps {
  params: { slug?: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch(
      groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        image,
        price,
        description
      }`,
      { slug }
    );
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const slug = params?.slug;

  if (!slug) {
    return <p className="text-red-500 text-center">Invalid product slug!</p>;
  }

  const product = await getProduct(slug);

  if (!product) {
    return <p className="text-red-500 text-center">Product not found!</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="aspect-square">
          {product.image?.asset?._ref ? (
            <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          ) : (
            <p>No image available</p>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-xl text-gray-700">{product.description}</p>
          <p className="text-2xl font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
