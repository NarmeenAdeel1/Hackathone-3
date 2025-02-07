import Header from "../../components/header";
import Footer from "../../components/footer";
import { FaTruck, FaCheckCircle, FaEnvelope, FaLeaf } from "react-icons/fa"; // React Icons library
import Image from "next/image";
import Prodcuts from "../../components/products";


export default function HomePageV2() {
    return (
        <div>
            <Header />

        
        <div className="relative w-[1440px] h-[704px] mx-auto border">
  <Image 
    src="woodentables.jpg" 
    alt="Background Image" 
    className="w-full h-full object-cover"
  />
  <div 
    className="absolute top-[130px] left-[730px] w-[630px] h-[444px] bg-slate-50 p-6 shadow-lg flex items-center
     justify-center text-center">
   <h1 className="font-clash text-clash-24 absolute top-20 flex items-center ">Luxury homeware for people <br /> who love timeless design quality</h1> <br />
    <p className="font-extralight">Shop the new Spring 2022 collection today</p>
    <button
            className="bg-gray-300 text-black font-satoshi font-bold rounded absolute bottom-6 left-6 w-[200px]"
            style={{
              width: "200px", // Increased Width
              height: "60px", // Increased Height
              fontSize: "16px", // Adjusted Font Size
              lineHeight: "24px", // Correct Line Height
              fontWeight: 400, // Medium Font Weight
            }}
          >
            View Collection
          </button>
  </div>

        </div>

      <div
      className="bg-[#F8F8F8] py-10 px-4"
      style={{ maxWidth: "1200px", margin: "auto" }} // Centered container
    >
      {/* Main Heading */}
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">
        What makes our brand different
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="text-center bg-white p-6 shadow-lg rounded">
          <FaTruck size={48} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            Next Day As Standard
          </h3>
          <p className="text-sm text-gray-600 mt-2">
          Order before 3pm and get your order the next day as standard          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center bg-white p-6 shadow-lg rounded">
          <FaCheckCircle size={48} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
          Made by true artisans
          </h3>
          <p className="text-sm text-gray-600 mt-2">
          Handmade crafted goods made with
          real passion and craftmanship
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center bg-white p-6 shadow-lg rounded">
          <FaEnvelope size={48} className="text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
          Unbeatable prices          </h3>
          <p className="text-sm text-gray-600 mt-2">
          For our materials and quality you won’t find better prices anywhere          </p>
        </div>

        {/* Card 4 */}
        <div className="text-center bg-white p-6 shadow-lg rounded">
          <FaLeaf size={48} className="text-green-700 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
          Recycled packaging          </h3>
          <p className="text-sm text-gray-600 mt-2">
          We use 100% recycled packaging to ensure our footprint is manageable          </p>
        </div>
      </div>
    </div>


   <Prodcuts />


        <div className="flex justify-center gap-4">
  <div 
    className="w-[540px] h-[478px] bg-[#2c2750] p-[64px_75px_54px_64px] text-gray-200"
  >
    <h1 className=" font-clash text-clash-24 mb-4">It started with a small idea</h1>
    <p className="text-sm font-extralight">
    A global brand with local beginnings, our story begain in a <br /> small studio in South London in early 2014    </p>
    <button
            className="bg-gray-500 text-black font-satoshi font-bold absolute left-28 rounded w-[200px] mt-36"
            style={{
              width: "200px", // Increased Width
              height: "60px", // Increased Height
              fontSize: "16px", // Adjusted Font Size
              lineHeight: "24px", // Correct Line Height
              fontWeight: 400, // Medium Font Weight
            }}
          >
            View Collection
          </button>
  </div>
  <div 
    className="w-[630px] h-[478px] bg-cover bg-center">
       {   <Image
                src="/yellowsofa.jpg"
                alt="Yellow Sofa"   width={540}
                height={478}
                className="object-cover"
              />}
  </div>
</div>



<div className="mt-6 relative">
<Image 
    src="hpv2last.jpg" 
    alt="Background Image" 
    className="w-full max-h-[444px] object-cover"
  />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-50 align-[center]">
    <h1 className="font-clash text-clash-32 ">
    Join the club and get the benefits
    </h1>
    <p className=" font-satoshi text-satoshi-16 text-center">
    Sign up for our newsletter and receive exclusive offers on <br /> new ranges, sales, pop up stores and more
    </p>

    <div className="flex items-center justify-center gap-4 mt-6">
  <div className="flex items-center gap-2">
    ✅ <span>Exclusive offers</span>
  </div>
  <div className="flex items-center gap-2">
    ✅ <span>Free events</span>
  </div>
  <div className="flex items-center gap-2">
    ✅ <span>Large discounts</span>
  </div>
</div>


  </div>
</div>

            <Footer />
        </div>
    );
}

