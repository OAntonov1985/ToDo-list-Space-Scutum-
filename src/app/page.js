import Header from './components/Header/Heaer';
import Main from './components/Main/Main';
import { HomeStyle } from './page.style';
import './globals.css';
import Head from 'next/head'

export const metadata = {
    title: "ToDo List",
    description: "ToDo List Test Task",
    icons: './public/icons/444.jpg',
    icons: {
        icon: [{
            url: "./public/icons/444.jpg",
            href: "./public/icons/444.jpg",
        }]
    }
};

export default function Home() {

    return (
        <HomeStyle className='container'>
            <Header />
            <Main />
        </HomeStyle>
    );
}
