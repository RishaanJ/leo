// src/app/page.jsx
import Image from 'next/image';

export default function Inventory() {
  return (
    <div className="side-navbar flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-1/4 bg-gray-200 dark:bg-gray-800 p-5 flex flex-col items-center">
        <Image
          className="dark:invert mb-4"
          src="https://990a3e5b-c30d-4852-bdc1-6ab521d2c31c-00-xbk9vmvqm7px.picard.replit.dev/leo_big.png"
          alt="Next.js logo"
          width={250}
          height={38}
          priority
        />
        <ul className="space-y-4 w-full">
          <li className="bg-gray-300 rounded-lg h-300">
            <a className="text-2xl cursor-pointer block p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Patients</a>
          </li>
          <li className="bg-gray-300 rounded-lg">
            <a className="text-2xl cursor-pointer block p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Analytics</a>
          </li>
          <li className="bg-gray-300 rounded-lg">
            <a className="text-2xl cursor-pointer block p-3 rounded-lg bg-gray-300 dark:bg-gray-700">Inventory</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col p-8 gap-4 w-full">
        <div className="flex flex-row gap-4 font-bold bg-gray-200 dark:bg-gray-800 p-4">
          <p className="w-36">Item</p>
          <p className="w-32">Opening Stock</p>
          <p className="w-32">Total Stock In</p>
          <p className="w-32">Total Stock Out</p>
          <p className="w-32">Remaining Stock</p>
          <p>Actions</p>
        </div>
        <div className="flex flex-row gap-4 font-medium p-4">
          <p className="w-36">Amoxicillin</p>
          <p className="w-32">200</p>
          <p className="w-32">20</p>
          <p className="w-32">120</p>
          <p className="w-32">100</p>
          <p>Actions</p>
        </div>
        <div className="flex flex-row gap-4 font-medium p-4">
          <p className="w-36">Benzonatate</p>
          <p className="w-32">150</p>
          <p className="w-32">10</p>
          <p className="w-32">115</p>
          <p className="w-32">45</p>
          <p>Actions</p>
        </div>
        <div className="flex flex-row gap-4 font-medium p-4">
          <p className="w-36">Conzip</p>
          <p className="w-32">300</p>
          <p className="w-32">45</p>
          <p className="w-32">75</p>
          <p className="w-32">270</p>
          <p>Actions</p>
        </div>
        <div className="flex flex-row gap-4 font-medium p-4">
          <p className="w-36">Ibuprofen</p>
          <p className="w-32">250</p>
          <p className="w-32">35</p>
          <p className="w-32">50</p>
          <p className="w-32">235</p>
          <p>Actions</p>
        </div>
      </div>
    </div>
  );
}