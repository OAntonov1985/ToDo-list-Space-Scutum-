"use client";
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <Provider store={store}>
                    {children}
                </Provider>
            </body>
        </html>
    )
}