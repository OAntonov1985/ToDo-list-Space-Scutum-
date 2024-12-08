import Header from './components/Header/Heaer';
import Main from './components/Main/Main';
import { HomeStyle } from './page.style';
import './globals.css';

export const metadata = {
    title: "ToDo List",
    description: "ToDo List Test Task",
    icons: './public/icons/plus.svg',
};

export default function Home() {

    return (
        <HomeStyle className='container'>
            <Header />
            <Main />
        </HomeStyle>
    );
}
