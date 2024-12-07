import { MainContainer, MainContainerInfo } from './Main.style';
import MainHeaderInfo from '../MainHeaderInfo/MainHeaderInfo';
import MainList from '../MainList/MainList';
import Pagination from '../Pagination/Pagination';

export default function Main() {
    return (
        <MainContainer>
            <MainContainerInfo>
                <MainHeaderInfo />
                <MainList />
                <Pagination />
            </MainContainerInfo>
        </MainContainer>
    )
}