import { client } from "@/sanity/lib/client"; 
import { groq } from "next-sanity"; 
import { product } from "@/sanity/type/product"; 
import { Slug } from "sanity"; 
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


interface ProductPageProps{
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<product> {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      productName,
      _type,
      image,
      price
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl max-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="aspect-square">
  {product.image?.asset?._ref ? (
    <Image
      src={urlFor(product.image).url()}
      alt={product.productName}
      width={500}
      height={500}
      className="rounded-lg shadow-md"
    />
  ) : (
    <p>No image available</p>
  )}
</div>
console.log("Fetched Product:", product);
        <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">
                {product.productName}
            </h1>
            <p className="text-2xl font-sans">
  {product.price.toString()}
</p>

        </div>
      </div>
    </div>
  );
}
