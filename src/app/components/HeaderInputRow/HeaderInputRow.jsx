import {
    HeaderInputRowContainer,
    HeaderInput,
    HeaderInputButton,
    HeaderInputButtonLogo
} from './HeaderInputRow.style';
import logo from "@/app/public/icons/plus.svg"

export default function HeaderInputRow() {
    return (
        <HeaderInputRowContainer>
            <HeaderInput
                placeholder="Введіть нове завдання"
                type='text'
            />
            <HeaderInputButton>Додати
                <HeaderInputButtonLogo
                    src={logo}
                    alt='plus logo'
                    width={16}
                    height={16}
                />
            </HeaderInputButton>
        </HeaderInputRowContainer>
    )
}