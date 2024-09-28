// src/app/page.jsx
import Image from 'next/image';

export default function Home() {
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
            <a className="text-2xl cursor-pointer block p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Inventory</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">Patient</h3>
        <h1 className="text-4xl font-bold mt-2 mb-8">Lincoln Douglass</h1>
        <div className="quick-info grid grid-cols-2 gap-4">
          <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h1 className="text-xl font-medium">Sex</h1>
            <h2 className="text-2xl font-semibold mt-2">M</h2>
          </div>
          <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h1 className="text-xl font-medium">Date of Birth</h1>
            <h2 className="text-2xl font-semibold mt-2">4/20/1969</h2>
          </div>
          <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h1 className="text-xl font-medium">Medical ID</h1>
            <h2 className="text-2xl font-semibold mt-2">1123871283</h2>
          </div>
          <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h1 className="text-xl font-medium">Room #</h1>
            <h2 className="text-2xl font-semibold mt-2">#263</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
