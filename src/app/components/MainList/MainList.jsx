import ItemInList from '../ItemInList/ItemInList';
import { MainListContainer } from './MainList.style';


export default function MainList() {
    return (
        <MainListContainer>
            <ItemInList />
            <ItemInList />
            <ItemInList />
        </MainListContainer>
    )
}