"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Form() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const router = useRouter();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    async function sendData(event) {
        event.preventDefault()
        console.log(formData)
        const url = "https://express-app-rouge-mu.vercel.app/api/users/login";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: "include",
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <form style={{ display: "flex", flexDirection: "column", maxWidth: 300, gap: 20 }}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type='submit' onClick={(event) => sendData(event)}>submit</button>

            </form>

            <button onClick={() => router.push("http://express-app-rouge-mu.vercel.app/api/users/auth/google")}>
                Redirect
            </button>
        </>
    )
}