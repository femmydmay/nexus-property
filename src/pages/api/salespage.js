// /pages/api/rentpage.js
export default async function handler(req, res) {
  const salesData = [
    {
      id: "1",
      amount: "1,500,000,000",
      description: "8 bedroom Terrace",
      location: "Maitama",
      seller: "Nexus Realtors",
      state: "Abuja",
    },
    {
      id: "2",
      amount: "550,000,000",
      description: "Terrace Duplex",
      location: "Ikeja",
      seller: "Nexus Realtors",
      state: "Lagos",
    },
    {
      id: "3",
      amount: "600,000,000",
      description: "8 bedroom Duplex Terrace",
      location: "Gwarinpa",
      seller: "Nexus Realtors",
      state: "Abuja",
    },
    {
      id: "4",
      amount: "450,000,000",
      description: "6-bedroom bungalow",
      location: "Ajah",
      seller: "Nexus Realtors",
      state: "Lagos",
    },
    {
      id: "5",
      amount: "350,000,000",
      description: "4-bedroom bungalow",
      location: "Wuye",
      seller: "Nexus Realtors",
      state: "Abuja",
    },
    {
      id: "6",
      amount: "200,000,000",
      description: "6-bedroom bungalow",
      location: "Elelenwo",
      seller: "Nexus Realtors",
      state: "Port Harcourt",
    },
    {
      id: "7",
      amount: "450,000,000",
      description: "6 bedroom Duplex ",
      location: "Ikeja",
      seller: "Nexus Realtors",
      state: "Lagos",
    },
    {
      id: "8",
      amount: "2,500,000,000",
      description: "Estate",
      location: "Asokoro",
      seller: "Nexus Realtors",
      state: "Abuja",
    },
  ];
  res.status(200).json(salesData);
}
