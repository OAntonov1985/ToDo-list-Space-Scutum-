import { HeaderContainer } from './Heaer.style';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import HeaderInputRow from '../HeaderInputRow/HeaderInputRow';

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderTitle />
            <HeaderInputRow />
        </HeaderContainer>
    )
}