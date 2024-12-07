import Image from 'next/image';
import { TitleText, TitleLogo, HeaderTitleContainer, TitleTextSpan } from './HeaderTitle.style';
import logo from "@/app/public/icons/rocket.svg"

export default function HeaderTitle() {
    return (
        <HeaderTitleContainer>
            <TitleLogo
                src={logo}
                alt="roket logo"
                width={22}
                height={36}
            />
            <TitleText >to
                <TitleTextSpan>do</TitleTextSpan>
            </TitleText>
        </HeaderTitleContainer>
    )
}