import React from "react";
import Card from "./Card";


const Products = ({ item, color, title }) => {
  return (
    <section className="my-10 bg-white">
      <header className="py-4 pl-2" style={{ backgroundColor: color }}>
        <p className="font-bold">{title}</p>
      </header>
      <div className="flex flex-wrap gap-12 p-4">
        {item.map((mapped_item, index) => {
          const {
            img,
            description,
            price,
            discount,
            bedroom,
            cars,
            bathrooms,
            property_type,
            market_status,
            total_area,
            covered_area,
          } = mapped_item;
          return (
            <div
              key={index}
              className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <Card
                image={img}
                price={price}
                description={description}
                discount={discount}
                bedroom={bedroom}
                bathrooms={bathrooms}
                property_type={property_type}
                market_status={market_status}
                total_area={total_area}
                covered_area={covered_area}
              />
            
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
