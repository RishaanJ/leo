// patientslist/page.js

"use client"
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Link from 'next/link'; // Import Link from next/link

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function PatientsList() {
  const [patients, setPatients] = useState([]);

  const vibrantColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * vibrantColors.length);
    return vibrantColors[randomIndex];
  };

  useEffect(() => {
    const fetchPatients = async () => {
      const patientsCollection = collection(db, 'Patients');
      const patientSnapshot = await getDocs(patientsCollection);
      const patientList = patientSnapshot.docs.map(doc => doc.data());
      setPatients(patientList);
    };

    fetchPatients();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Patient List</h2>

        {patients.map((patient, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer justify-between bg-gray-50 p-4 rounded-lg mb-4 hover:bg-gray-100 transition duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className={`${getRandomColor()} h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold`}>
                {patient.name.charAt(0)} {/* Use the first letter of full_name */}
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700">{patient.name}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Button to navigate to /newpatient */}
        <div className="text-center mt-6">
          <Link href="/newpatient">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Add New Patient
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
