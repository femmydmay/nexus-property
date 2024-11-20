"use client";

import { useState, useEffect } from "react";
import { SalesPage } from "../../../types/salesPage"; // Make sure you use the correct type for sales page

const SalesPageComponent = () => {
  const [salesPage, setSalesPage] = useState<SalesPage[]>([]); // Fixed incorrect function name (setsalesPage -> setSalesPage)
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSales, setFilteredSales] = useState<SalesPage[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSalesPage = async () => {
      const baseURL =
        process.env.NEXT_PUBLIC_BASE_URL || "https://nexus-property.vercel.app"; // Ensure the correct API URL
      try {
        const res = await fetch(`${baseURL}/api/salespage`); // Corrected to use the correct API for sales data
        if (!res.ok) throw new Error("Failed to fetch sales data"); // Error handling with a clearer message
        const data: SalesPage[] = await res.json();
        setSalesPage(data);
        setFilteredSales(data);
      } catch (error) {
        setError("Unable to fetch sales data."); // Updated error message
      }
    };
    fetchSalesPage();
  }, []);

  useEffect(() => {
    setFilteredSales(
      salesPage.filter(
        (sale) =>
          sale.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sale.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sale.state.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, salesPage]);

  return (
    <div className="container mx-auto mt-10 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        List of Houses for Sale in Nigeria
        <br /> Contact us for more details
      </h1>

      {/* Search bar */}
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search by name, city, or state"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 border border-gray-300 rounded-md w-80 mx-auto"
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="text-center py-8">
          <h2 className="text-2xl font-semibold text-red-600">{error}</h2>
        </div>
      )}

      {/* Houses list */}
      <ul className="flex flex-wrap justify-center gap-6 mt-10">
        {filteredSales.length > 0 ? (
          filteredSales.map((salesPage) => (
            <li
              key={salesPage.id}
              className="bg-gray-100 px-6 py-4 rounded-lg border border-gray-200 shadow-md hover:shadow-lg w-full sm:w-[95%] md:w-[48%] lg:w-[30%] xl:w-[23%] text-center"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {salesPage.amount}
              </h2>
              <p className="text-gray-700">
                Description: {salesPage.description}
              </p>
              <p className="text-gray-700">Location: {salesPage.location}</p>
              <p className="text-gray-700">Seller: {salesPage.seller}</p>
              <p className="text-gray-700">State: {salesPage.state}</p>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-700 w-full">No houses found.</p>
        )}
      </ul>
    </div>
  );
};

export default SalesPageComponent;
