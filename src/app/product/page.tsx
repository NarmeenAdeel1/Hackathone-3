'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { getProducts } from "../../sanity/lib/serverproducts";
import Swal from "sweetalert2"; 


// Import Header component
import Header from "../../components/header";

// Updated Product type
type Product = {
  _id: string;
  productName: string; // Assuming this field exists in your schema
  slug: { current: string };
  image: { asset: { url: string } };
  price: string;
  quantity: number;
  tags: string[];
  description: string;
  category: { title: string };
};

// handleAddToCart
const handleAddToCart = (e: React.MouseEvent, product: Product) => {
  e.preventDefault();

  Swal.fire({
    position : "top-right",
    icon : "success",
    title : `${product.productName} added to Cart`, // Updated to match productName
    showConfirmButton : false,
    timer: 1000
  });

  // addToCart(product);
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        Swal.fire('Error fetching products!',  'error'); // Show error to user
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <a href={`/furniture/${product.slug.current}`}>
              <Image
                src={product.image.asset.url}
                alt={product.productName}
                width={300}
                height={300}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <p className="text-lg font-bold text-blue-500">
                ${(parseFloat(product.price) || 0).toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">Category: {product.category.title}</p>

              <button
                className="bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Header /> {/* Header ko yahan render karein */}
      <ProductList />
    </div>
  );
}
