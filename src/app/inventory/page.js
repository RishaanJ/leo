"use client"

// inventory/page.jsx
import Image from 'next/image';
import { useState } from 'react';

export default function Inventory() {
  const [stockIn, setStockIn] = useState(20);
  const [stockOut, setStockOut] = useState(120);
  const OpeningStock = 200;
  
  return (
    <div className="side-navbar flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-1/4 bg-gray-200 dark:bg-gray-800 p-5 flex flex-col items-center">
        <Image
          className="dark:invert mb-4"
          src="/logo.png"
          alt="Leo logo"
          width={250}
          height={38}
          priority
        />
        <ul className="space-y-4 w-full text-gray-700">
          <li className="bg-gray-100 dark:bg-gray-300 rounded-lg h-300">
            <a className="text-2xl cursor-pointer block p-3 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 hover:text-gray-700" href="/">Dashboard</a>
          </li>
          <li className="bg-gray-100 dark:bg-gray-300 rounded-lg">
            <a className="text-2xl cursor-pointer block p-3 rounded-lg bg-gray-300 dark:bg-gray-300 text-gray-700">Inventory</a>
          </li>
        </ul>
      </div>
      {
        ((OpeningStock + stockIn - stockOut) < 80)
          ? <div className="h-10 w-full text-lg absolute bg-[#EB6464] p-6 flex items-center justify-center"><p>Low supply of Amoxicillin (quantity: { OpeningStock + stockIn - stockOut })</p></div>
          : null
      }
      <div className="flex flex-col p-8 mt-40">
        <div className="flex flex-row gap-4 font-bold bg-gray-200 dark:bg-gray-800 p-4 mb-4">
          <p className="w-36">Item</p>
          <p className="w-32">Opening Stock</p>
          <p className="w-32">Total Stock In</p>
          <p className="w-32">Total Stock Out</p>
          <p className="w-32">Remaining Stock</p>
          <p>Actions</p>
        </div>
        <div className="flex flex-row gap-4 font-medium p-4">
          <p className="w-36">Amoxicillin</p>
          <p className="w-32">{ OpeningStock }</p>
          <p className="w-32">{ stockIn }</p>
          <p className="w-32">{ stockOut }</p>
          <p className="w-32">{ OpeningStock + stockIn - stockOut }</p>
          <button className="bg-[#7CE458] text-gray-900 w-28" onClick={()=>setStockIn(stockIn => stockIn + 1)}>Stock in</button>
          <button className="bg-[#EB6464] text-gray-900 w-28" onClick={()=>setStockOut(stockOut => stockOut + 1)}>Stock out</button>
        </div>
        <div className="flex flex-row gap-4 font-medium p-4">
          <p className="w-36">Benzonatate</p>
          <p className="w-32">150</p>
          <p className="w-32">10</p>
          <p className="w-32">45</p>
          <p className="w-32">115</p>
        </div>
        <div className="flex flex-row gap-4 font-medium p-4">
          <p className="w-36">Conzip</p>
          <p className="w-32">300</p>
          <p className="w-32">45</p>
          <p className="w-32">75</p>
          <p className="w-32">270</p>
        </div>
        <div className="flex flex-row gap-4 font-medium p-4">
          <p className="w-36">Ibuprofen</p>
          <p className="w-32">250</p>
          <p className="w-32">35</p>
          <p className="w-32">50</p>
          <p className="w-32">235</p>
        </div>
      </div>
    </div>
  );
}