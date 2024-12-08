import { MainContainer, MainContainerInfo } from './Main.style';
import MainHeaderInfo from '../MainHeaderInfo/MainHeaderInfo';
import MainList from '../MainList/MainList';
import Pagination from '../Pagination/Pagination';
import { ADRESS } from "@/constants/urlAdress"

export default async function Main() {
    const res = await fetch(`${ADRESS}/todos`)
    const data = await res.json();

    return (
        <MainContainer>
            <MainContainerInfo>
                <MainHeaderInfo />
                <MainList data={data} />
                <Pagination />
            </MainContainerInfo>
        </MainContainer>
    )
}
