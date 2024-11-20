import React from "react";

import Products from "../components/Products";

// import { limited_stock, top_selling } from "./_product_list";
import { top_selling, limited_stock } from "/utils/product_list";
const Proplist = () => {
  return (
    <>
      
        <div className="w-[95%]  -m-8 mx-auto ">
          <Products
            item={top_selling}
            color={"#acadad"}
            title="Top Selling Properties"
          />
          <Products
            item={limited_stock}
            color={"#acadad"}
            title="Properties for rent"
          />
        </div>
      
    </>
  );
};

export default Proplist;
