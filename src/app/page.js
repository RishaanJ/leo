// src/app/page.jsx
import Image from 'next/image';
import PatientsList from './patientslist/page.js'

export default function Home() {
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
            <a className="text-2xl cursor-pointer block p-3 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-100" href="/">Dashboard</a>
          </li>
          <li className="bg-gray-100 dark:bg-gray-300 rounded-lg">
            <a className="text-2xl cursor-pointer block p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-100" href="/inventory">Inventory</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <PatientsList />
        {/* <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">Patient</h3>
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
        </div> */}
      </div>
    </div>
  );
}
