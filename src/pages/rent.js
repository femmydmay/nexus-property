import React from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import RentPageComponent from "./property/Rent";

const Rent = () => {
  const router = useRouter();
  return (
    <>
      <main>
        <main className="bg-blue-1000 "></main>
        <div className="grid place-items-center mt-10 relative min-h-[90dvh] ">
     
          <Image
            src="/modernhouse7.jpg"
            width={500}
            height={500}
            alt="search image"
            className="absolute
              border-gray-100  shadow-sm mt-7
          w-[100%] h-full object-cover mb-60 -z-10 top-0  "
          />
          <div className="font-bold text-white mt-40 bg-slate-200 bg-opacity-40 rounded  text-5xl">
            FOR-RENT
          </div>
        </div>
        <RentPageComponent />
        <Footer />
      </main>
    </>
  );
};

export default Rent;
