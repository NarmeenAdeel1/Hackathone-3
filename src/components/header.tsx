import Link from 'next/link'; // Importing Link for client-side routing
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
// import ProductList1 from '../app/productlist1/page';
// import ProductList2 from '../app/productlist2/page';

export default function HeaderSection() {
  return (
    <div className='px-[13px]'>
      <div className='flex justify-between py-2 border-b border-grey-800'>
        <div className='p-4'><IoSearchOutline size={20} color="gray"/>
        </div>
        <div className=' font-clash text-clash-24'>Avion</div>
        <div className='flex justify-corner gap-4 p-4'>
          <IoCartOutline size={24} color="gray" />
          <RxAvatar size={24} color="gray"/>
        </div>
      </div>
      <div className='flex justify-center py-4 border-b border-grey-800 font-satoshi'>
        <ul className='flex gap-6'>
          <li className="hover:text-purple-600 cursor-pointer">Plant pots</li>
          <li className="hover:text-purple-600 cursor-pointer">Ceramics</li>
          <li className="hover:text-purple-600 cursor-pointer">Tables </li>
          <li className="hover:text-purple-600 cursor-pointer">Chairs</li>
          <li className="hover:text-purple-600 cursor-pointer">Crockery</li>
          <li className="hover:text-purple-600 cursor-pointer">Tableware</li>
          <li className="hover:text-purple-600 cursor-pointer">Cutlery</li>
        </ul>
      </div>
      <div className='flex justify-center py-4 font-satoshi'>
        <ul className='flex gap-6'>
          <li><Link href="/" className="hover:text-purple-600 cursor-pointer">HomePageV1</Link></li>
          <li><Link href="/homev2" className="hover:text-purple-600 cursor-pointer" >HomePageV2</Link></li>
          <li><Link href="/about" className="hover:text-purple-600 cursor-pointer">About</Link></li>
          {/* Linking ProductList to /product route */}
          <li><Link href="/product" className="hover:text-purple-600 cursor-pointer">Product List</Link></li> {/* Updated link */}
          <li><Link href="/cart" className="hover:text-purple-600 cursor-pointer">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
}
