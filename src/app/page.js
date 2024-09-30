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
            <a className="text-2xl cursor-pointer block p-3 rounded-lg bg-gray-300 dark:bg-gray-300 text-gray-700" href="/">Dashboard</a>
          </li>
          <li className="bg-gray-100 dark:bg-gray-300 rounded-lg">
            <a className="text-2xl cursor-pointer block p-3 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 hover:text-gray-700" href="/inventory">Inventory</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <PatientsList />
      </div>
    </div>
  );
}
