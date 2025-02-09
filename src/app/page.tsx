import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";
import { FaTruck, FaCheckCircle, FaEnvelope, FaLeaf } from "react-icons/fa"; // React Icons library
import Prodcuts from "../components/products";
import "./globals.css";



export default function Homepage() {
  return (
    <div>
      <Header />
      {/* Main container */}
      <div
        className="container mx-auto flex items-center bg-[#2A254B] rounded-lg shadow-lg mt-10"
        style={{ maxWidth: "1200px", height: "500px" }} // Height reduced
      >
        {/* Text Section */}
        <div className="w-1/2 flex flex-col p-8 self-start mb-8">
          <h1 className="text-4xl font-satoshi text-gray-50 self-start">
            The furniture brand for the <br /> future, with timeless designs
          </h1>
          <br />
          <br />

          {/* Corrected Button */}
          <button
            className="bg-[#494565] text-gray-50 font-satoshi font-medium rounded"
            style={{
              width: "160px", // Increased Width
              height: "60px", // Increased Height
              fontSize: "16px", // Adjusted Font Size
              lineHeight: "24px", // Correct Line Height
              fontWeight: 400, // Medium Font Weight
            }}
          >
            View Collection
          </button>

          {/* Updated Paragraph */}
          <p
            className="text-gray-50 absolute -bottom-10"
            style={{
              fontSize: "14px", // Reduced font size
              lineHeight: "20px", // Adjusted line height
              marginTop: "auto", // Push paragraph to bottom of text section
            }}
          >
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand <br />
            with nice fonts, tasteful colors, and a beautiful way to display
            things digitally <br />
            using modern web technologies.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-end">
          <Image
            src="/dandychair.jpg"
            width={400} // Width adjusted for proper scaling
            height={500} // Height matches container
            alt="The Dandy Chair"
            className=""
          />
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
              Order before 3pm and get your order the next day as standard{" "}
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center bg-white p-6 shadow-lg rounded">
            <FaCheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Made by true artisans
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center bg-white p-6 shadow-lg rounded">
            <FaEnvelope size={48} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Unbeatable prices{" "}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              For our materials and quality you won’t find better prices
              anywhere{" "}
            </p>
          </div>

          {/* Card 4 */}
          <div className="text-center bg-white p-6 shadow-lg rounded">
            <FaLeaf size={48} className="text-green-700 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Recycled packaging{" "}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We use 100% recycled packaging to ensure our footprint is
              manageable{" "}
            </p>
          </div>
        </div>
      </div>


      <Prodcuts />


      <div className="container mx-auto flex items-center justify-center mt-10">
        <button
          className="bg-gray-300 text-black font-satoshi font-bold rounded absolute items-center w-[260px]"
          style={{
            width: "260px", // Increased Width
            height: "60px", // Increased Height
            fontSize: "16px", // Adjusted Font Size
            lineHeight: "24px", // Correct Line Height
            fontWeight: 400, // Medium Font Weight
          }}
        >
          View Collection
        </button>
      </div>{" "}
      <br />
      <br /> <br />

      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-8">
          Our Popular Products
        </h1>{" "}
      </div>


      <div className="flex justify-center gap-4 px-4">
        {/* Item 1 */}
        <div className="text-center">
          <Image
            src="/popularsofa.jpg"
            alt="Popular Sofa"
            className="w-[480px] h-full object-cover"
            width={480}
            height={200}
          />
        </div>

        {/* Item 2 */}
        <div className="text-center">
          <Image
            src="/greychair.jpg"
            alt="Grey Chair"
            width={280}
            height={200}
          />
        </div>

        {/* Item 3 */}
        <div className="text-center">
          <Image
            src="/dandychair.jpg"
            alt="Dandy Chair"
            width={280}
            height={200}
          />
        </div>
      </div>




      <div className="container mx-auto flex items-center justify-center mt-10">
        <button
          className="bg-gray-300 text-black font-satoshi font-bold rounded absolute items-center w-[260px]"
          style={{
            width: "260px", // Increased Width
            height: "60px", // Increased Height
            fontSize: "16px", // Adjusted Font Size
            lineHeight: "24px", // Correct Line Height
            fontWeight: 400, // Medium Font Weight
          }}
        >
          View Collection
        </button>
      </div>{" "}
      <br />
      <br /> <br />
      <div className="flex flex-col items-center">
        <h1 className=" flex font-clash text-clash-36 justify-center whitespace-nowrap">
          Join the club and get the benefits
        </h1>
        <p className="font-satoshi size-20 whitespace-nowrap text-center flex justify-center">
          Sign up for our newsletter and receive exclusive offers on new <br />{" "}
          ranges, sales, pop up stores and more
        </p>
      </div>
      {/* Sign Up Section */}
      <div className="text-white w-full sm:w-auto flex justify-center">
        <div className="mt-4">
          <input
            type="text"
            placeholder="your@email.com"
            className="w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md"
          />
          <button className="mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md">
            {" "}
            SIGN UP
          </button>
        </div>
      </div>
      <br />
      <div className="flex w-[1440px] h-[603px]">
        {/* Left Side Text */}
        <div className="flex flex-col w-[536px] h-[225px] ml-[84px] mt-[72px] gap-[25px]">
          <h1 className="text-3xl font-clash">
            {" "}
            From a studio in London to a <br /> global brand with over 400{" "}
            <br />
            outlets{" "}
          </h1>
          <p className="text-lg font-thin">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-lg">
            Handmade, and lovingly crafted furniture and homeware is what we
            live. breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>{" "}
          <br />
          <br />
          <p className="text-lg">Get In Touch</p>
        </div>

        {/* Right Side Image */}
        <div className="w-[720px] h-[603px] ml-auto">
        <img
            src="/HPLP.jpg"
            alt="Example"
            className="w-full h-full object-cover"
          />


        </div>
      </div>
      <Footer />
    </div>
    
  );
}
