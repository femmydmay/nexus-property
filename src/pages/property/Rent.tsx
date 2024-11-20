"use client";

import { useState, useEffect } from "react";
import { RentPage } from "../../../types/rentPage";

const RentPageComponent = () => {
  const [rentPage, setRentPage] = useState<RentPage[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRent, setFilteredRent] = useState<RentPage[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentPage = async () => {
      const baseURL =
        process.env.NEXT_PUBLIC_BASE_URL || "https://nexus-property.vercel.app";
      try {
        const res = await fetch(`${baseURL}/api/rentpage`);
        if (!res.ok) throw new Error(`Failed to fetch rent data`);
        const data: RentPage[] = await res.json();
        setRentPage(data);
        setFilteredRent(data);
      } catch (error) {
        setError("Unable to fetch rent data.");
      }
    };
    fetchRentPage();
  }, []);

  useEffect(() => {
    setFilteredRent(
      rentPage.filter(
        (rent) =>
          rent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rent.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rent.state.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, rentPage]);

  return (
    <div className="container mx-auto mt-10 mb-50 py-8">
      <h1 className="text-3xl md:text-2xl sm:text-sm font-bold text-center mb-6">
        List of Houses for Rent in Nigeria
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

      {/* List of Houses */}
      <ul className="flex flex-wrap justify-center gap-6 mt-10">
        {filteredRent.length > 0 ? (
          filteredRent.map((rentPage) => (
            <li
              key={rentPage.id}
              className="bg-gray-100 p-6 rounded-lg border border-gray-200 hover:border-slate-500 shadow-lg w-full sm:w-[95%] md:w-[48%] lg:w-[30%] xl:w-[23%] text-center"
            >
              <h2 className="text-2xl font-semibold mb-2">{rentPage.amount}</h2>
              <p className="text-gray-700">
                Description: {rentPage.description}
              </p>
              <p className="text-gray-700">Location: {rentPage.location}</p>
              <p className="text-gray-700">Seller: {rentPage.seller}</p>
              <p className="text-gray-700">State: {rentPage.state}</p>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-700 w-full">No houses found.</p>
        )}
      </ul>
    </div>
  );
};

export default RentPageComponent;
