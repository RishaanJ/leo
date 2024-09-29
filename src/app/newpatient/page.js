// newpatient/page.js

"use client";
import React, { useState } from 'react';
import OpenAI from "openai";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Link from 'next/link'; // Import Link from next/link

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export default function NewPatient() {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === 'image/png') {
            setFile(selectedFile);
        } else {
            alert('Please upload a valid PNG file.');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (file) {
            try {
                const imageUrl = await uploadImage(file);
                const apiResponse = await callChatGPTAPI(imageUrl);

                const parsedResponse = JSON.parse(apiResponse);
                await addDoc(collection(db, "Patients"), parsedResponse);
                setResponse("Data successfully added to Firestore!");
            } catch (error) {
                console.error("Error:", error);
                alert('An error occurred while processing your request.');
            }
        }
    };

    const uploadImage = async (file) => {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    };

    const callChatGPTAPI = async (imageUrl) => {
        const openai = new OpenAI({ apiKey: "", dangerouslyAllowBrowser: true });

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a test medical tracking website for senior retirement homes. Your goal is to parse a medical report image into a dictionary format containing fields like date of birth, sex, cognitive status, medications needed, notes, etc. Provide the output as a JSON string without any additional text and do not start it off with code blocks like ```json. Also do not put any nesting dictionaries, just put them all in general EXCEPT FOR MEDICATION, and if there is no name set name to be No name" },
                {
                    role: "user",
                    content: [
                        { type: "text", text: "" },
                        {
                            type: "image_url",
                            image_url: { url: imageUrl }
                        }
                    ],
                },
            ],
        });
        
        return completion.choices[0].message.content;
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-black text-center">Upload Patient File</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
                            Choose a PNG image
                        </label>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/png"
                            onChange={handleFileChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white text-gray-700 placeholder-gray-400 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200 mb-4"
                    >
                        Upload
                    </button>
                </form>
                {file && (
                    <div className="mt-4 text-center text-gray-600">
                        <p>Selected file: <span className="font-semibold">{file.name}</span></p>
                    </div>
                )}
                {response && (
                    <div className="mt-4 text-gray-800">
                        <h3 className="font-bold">Response from API:</h3>
                        <p>{response}</p>
                    </div>
                )}
                <Link href="/" passHref>
                    <button className="w-full mt-4 bg-gray-300 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-400 transition duration-200">
                        Back to Patient List
                    </button>
                </Link>
            </div>
        </div>
    );
}
