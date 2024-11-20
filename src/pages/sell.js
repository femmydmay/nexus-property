import React from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import SalesPageComponent from "./property/Sale";

const Sell = () => {
  const router = useRouter();
  return (
    <>
      <main className="bg-blue-1000 ">
        <div className="grid place-items-center mt-10 relative min-h-[90dvh] ">
          {/* <img
            className="absolute
              border-gray-100  shadow-sm mt-7
          w-[100%] h-full object-cover mb-60 -z-10 top-0"
            src="../modernhouse4.jpg"
          /> */}
          <Image
            src="/modernhouse4.jpg"
            width={500}
            height={500}
            alt="search image"
            className="absolute
              border-gray-100  shadow-sm mt-7
          w-[100%] h-full object-cover mb-60 -z-10 top-0  "
          />
          <div className="font-bold text-slate-500 bg-slate-200 bg-opacity-40 rounded  text-6xl">
            FOR-SALE
          </div>
        </div>
        <SalesPageComponent />
        <Footer />
      </main>
    </>
  );
};

export default Sell;
