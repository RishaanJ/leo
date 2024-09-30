"use client"

import Image from 'next/image';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.DB_API_KEY,
  authDomain: process.env.DB_AUTH_DOMAIN,
  projectId: process.env.DB_PROJECT_ID,
  storageBucket: process.env.DB_STORAGE_BUCKET,
  messagingSenderId: process.env.DB_SENDER_ID,
  appId: process.env.DB_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function PatientsList() {
  const [patient, setPatient] = useState([]);
  const params = useParams() 

  useEffect(() => {
    const fetchPatients = async () => {
      const snap = await getDoc(doc(db, 'Patients', params.id))

      if (snap.exists()) {
        setPatient(snap.data())
      }
      else {
        setPatient(null)
      }
    };

    fetchPatients();
  }, []);

  console.log(patient)

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
      {
        (patient != null)
          ?
          <div className="flex-1 p-8">
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">Patient</h3>
            <h1 className="text-4xl font-bold mt-2 mb-8">{ patient.name }</h1>
            <div className="quick-info grid grid-cols-2 gap-4">
              <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
                <h1 className="text-xl font-medium">Medical ID</h1>
                <h2 className="text-2xl font-semibold mt-2">{ params.id }</h2>
              </div>
              {
                (patient.hasOwnProperty("date_of_birth"))
                  ? 
                  <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
                    <h1 className="text-xl font-medium">Date of Birth</h1>
                    <h2 className="text-2xl font-semibold mt-2">{ patient.date_of_birth }</h2>
                  </div>
                  :
                  <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
                    <h1 className="text-xl font-medium">Date of Birth</h1>
                    <h2 className="text-2xl font-semibold mt-2">No date of birth</h2>
                  </div>
              }
              {
                (patient.hasOwnProperty("medication"))
                  ? 
                  <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg col-span-2">
                    <h1 className="text-xl font-medium">Medication Information</h1>
                    <div className="flex flex-row w-full justify-between pr-32">
                      <div>
                        <h2 className="mt-3">Name</h2>
                        <h2 className="text-2xl font-semibold mt-2">{ patient.medication.name }</h2>
                      </div>
                      <div>
                        <h2 className="mt-3">Dosage</h2>
                        <h2 className="text-2xl font-semibold mt-2">{ patient.medication.dosage }</h2>
                      </div>
                      <div>
                        <h2 className="mt-3">Instructions</h2>
                        <h2 className="text-2xl font-semibold mt-2">{ patient.medication.instructions }</h2>
                      </div>
                    </div>
                  </div>
                  : null
              }
            </div>
          </div>
          :
          <div className="flex-1 p-8">
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">Patient</h3>
            <h1 className="text-4xl font-bold mt-2 mb-8">Patient Not Found</h1>
          </div>
        }
        </div>
  );
}