import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Link from "next-preload-headers";
import { Inter } from "next/font/google";
import Head from "next/head";
import { FaBars } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { BiHelpCircle, BiSearch } from "react-icons/bi";
import { Badge, Button, Divider, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => setCollapse((prev) => !prev);
  return (
    <>
      <Head>
        <title>NEXUS CLASSIC PROPERTIES </title>
      </Head>
      <main className="bg-blue-1000 "></main>
      <nav className="  flex  border-b  max-sm:relative h-20 px-6 items-center justify-between w-full fixed top-0 right-0 z-10 bg-slate-200 mb-10">
        <Link href="" className="text-white text-3xl font-bold">
        
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="search image"
            className="relative 
              border-gray-100 shadow-sm
          max-w-sm h-full w-[80%] object-cover -ml-3  pr-9 mx-auto  "
          />
        </Link>
        <ul
          className={`flex ml-auto ${
            collapse ? "max-sm:hidden" : ""
          }  max-sm:flex-col max-sm:top-20 max-sm:bg-gray-400 max-sm:left-0 max-sm:w-full  max-sm:gap-2 max-sm:py-2 max-sm:pl-3 z-50 max-sm:absolute w-1/2 justify-between text-slate-900 font-bold `}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sell">Sell</Link>
          </li>
          <li>
            <Link href="/rent">Rent</Link>
          </li>
          <li>
            <Link href="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link href="/contacts">Contact</Link>
          </li>
          {/* <li>
            <Link href="/selldetail">SellDetail</Link>
          </li> */}
          {/* <li>
            <Link className="flex" href="/account/login">
              <BsPerson />
              <RxCaretDown /> Client Account
            </Link>
          </li> */}
        </ul>
        <div className="flex lg:hidden">
          {/* <button className="text-white">lkjmkjkl</button> */}
          <FaBars
            className="text-white z-40 text-xl bg-slate-600 max-sm:block hidden  ml-auto"
            onClick={handleCollapse}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
