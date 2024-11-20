// /pages/api/rentpage.js
export default async function handler(req, res) {
  const rentData = [
    {
      id: "1",
      amount: "4,500,000",
      description: "4-bedroom apartment",
      location: "Gwarinpa",
      seller: "Nexus Realtors",
      state: "Abuja",
    },
    {
      id: "2",
      amount: "2,500,000",
      description: "2-bedroom flat",
      location: "Ikeja",
      seller: "Nexus Realtors",
      state: "Lagos",
    },
    {
      id: "3",
      amount: "1,000,000",
      description: "Studio apartment",
      location: "Wuye",
      seller: "Nexus Realtors",
      state: "Abuja",
    },
    {
      id: "4",
      amount: "4,500,000",
      description: "3-bedroom bungalow",
      location: "Maitama",
      seller: "Nexus Realtors",
      state: "Abuja",
    },
    {
      id: "5",
      amount: "6,500,000",
      description: "4-bedroom bungalow",
      location: "Ajah",
      seller: "Nexus Realtors",
      state: "Lagos",
    },
    {
      id: "6",
      amount: "2,500,000",
      description: "3-bedroom bungalow",
      location: "GRA",
      seller: "Nexus Realtors",
      state: "Port Harcourt",
    },
    {
      id: "7",
      amount: "3,500,000",
      description: "4-bedroom bungalow",
      location: "GRA",
      seller: "Nexus Realtors",
      state: "Port Harcourt",
    },
    {
      id: "8",
      amount: "6,000,000",
      description: "4-bedroom bungalow",
      location: "Asokoro",
      seller: "Nexus Realtors",
      state: "LAbuja",
    },
  ];
  res.status(200).json(rentData);
}
