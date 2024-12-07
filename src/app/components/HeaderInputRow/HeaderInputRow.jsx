"use client"
import { useState } from 'react';
import {
    HeaderInputRowContainer,
    HeaderInput,
    HeaderInputButton,
    HeaderInputButtonLogo
} from './HeaderInputRow.style';
import logo from "@/app/public/icons/plus.svg";

export default function HeaderInputRow() {
    const [inputText, setInputText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const isError = (inputText.length < 10 || inputText.length > 500) && (isFocused || inputText.length > 0);


    return (
        <HeaderInputRowContainer>
            <HeaderInput
                placeholder="Введіть нове завдання"
                type='text'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onFocus={() => setIsFocused(true)}  // Встановити фокус
                onBlur={() => setIsFocused(false)}  // Скинути фокус
                error={isError}
            />
            <HeaderInputButton
                onClick={() => (setInputText(""), setIsFocused(false))}
            >Додати
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