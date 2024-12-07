import { MainHeaderInfoContainer, HeadrItemContainer, HeadrText, HeadrNumber } from "./MainHeaderInfo.style";

export default function MainHeaderInfo() {
    return (
        <MainHeaderInfoContainer>
            <HeadrItemContainer>
                <HeadrText>Виконані завдання</HeadrText>
                <HeadrNumber>2  з  5</HeadrNumber>
            </HeadrItemContainer>
            <HeadrItemContainer>
                <HeadrText>Всього завдань</HeadrText>
                <HeadrNumber>5</HeadrNumber>
            </HeadrItemContainer>
        </MainHeaderInfoContainer>
    )
}