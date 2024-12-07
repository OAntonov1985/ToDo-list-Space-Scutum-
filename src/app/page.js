import Header from './components/Header/Heaer';
import Main from './components/Main/Main';
import { HomeStyle, HomeStyleContainer } from './page.style';
import './globals.css';

export default function Home() {
    return (
        <HomeStyle className='container'>
            <Header />
            <Main />
        </HomeStyle>
    );
}
