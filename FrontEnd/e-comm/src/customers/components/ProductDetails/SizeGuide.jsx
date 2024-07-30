// src/components/SizeChart.js
import React from 'react';

const SizeGuide = () => {
  const sizes = [
    { brand: 'S', standard: 'S', chest: 40, shoulder: 17, length: 29.8 },
    { brand: 'M', standard: 'M', chest: 42, shoulder: 18, length: 30 },
    { brand: 'L', standard: 'L', chest: 44, shoulder: 19, length: 30.2 },
    { brand: 'XL', standard: 'XL', chest: 46, shoulder: 20, length: 30.5 },
    { brand: '2XL', standard: '2XL', chest: 48, shoulder: 21, length: 30.8 },
    { brand: '3XL', standard: '3XL', chest: 50, shoulder: 22, length: 31 },
    { brand: '4XL', standard: '4XL', chest: 52, shoulder: 23, length: 31.2 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4"> Symbol Size Chart</h2>
      <p className="mb-4">IN MENS CASUAL SHIRT REGULAR FIT (BELOW MEASUREMENTS ARE GARMENT MEASUREMENT)</p>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 bg-blue-500 text-white px-4 py-2">Brand Size</th>
              <th className="border border-gray-300 bg-blue-500 text-white px-4 py-2">Standard Size</th>
              <th className="border border-gray-300 bg-blue-500 text-white px-4 py-2">Chest (in)</th>
              <th className="border border-gray-300 bg-blue-500 text-white px-4 py-2">Shoulder (in)</th>
              <th className="border border-gray-300 bg-blue-500 text-white px-4 py-2">Front Length (in)</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size, index) => (
              <tr key={index} className="bg-white even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{size.brand}</td>
                <td className="border border-gray-300 px-4 py-2">{size.standard}</td>
                <td className="border border-gray-300 px-4 py-2">{size.chest}</td>
                <td className="border border-gray-300 px-4 py-2">{size.shoulder}</td>
                <td className="border border-gray-300 px-4 py-2">{size.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizeGuide;
