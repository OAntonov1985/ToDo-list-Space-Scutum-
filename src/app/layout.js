import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata = {
    title: "ToDo List",
    description: "ToDo List Test Task",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.className}>
            <body>{children}</body>
        </html>
    )
}