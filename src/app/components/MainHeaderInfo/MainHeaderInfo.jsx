'use client';
import { useSelector } from 'react-redux';
import {
    MainHeaderInfoContainer,
    HeadrItemContainer,
    HeadrText,
    HeadrNumber
} from "./MainHeaderInfo.style";

export default function MainHeaderInfo() {
    const currentData = useSelector((state) => state.userData.currentData);
    const doneTasks = currentData.filter(item => item.completed == true)
    return (
        <MainHeaderInfoContainer>
            <HeadrItemContainer>
                <HeadrText>Виконані завдання</HeadrText>
                <HeadrNumber>{doneTasks.length}  з  {currentData.length}</HeadrNumber>
            </HeadrItemContainer>
            <HeadrItemContainer>
                <HeadrText>Всього завдань</HeadrText>
                <HeadrNumber>{currentData.length}</HeadrNumber>
            </HeadrItemContainer>
        </MainHeaderInfoContainer>
    )
}