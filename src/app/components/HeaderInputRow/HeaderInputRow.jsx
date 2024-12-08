"use client"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNewTask } from '@/store/userSclise';
import { setNewTaskAPI } from '@/utils/api/setOps';
import {
    HeaderInputRowContainer,
    HeaderInput,
    HeaderInputButton,
    HeaderInputButtonLogo,
    HeaderInputContainer
} from './HeaderInputRow.style';
import logo from "@/app/public/icons/plus.svg";


export default function HeaderInputRow() {
    const [inputText, setInputText] = useState('');
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();
    const totalData = useSelector((state) => state.userData.data);

    async function saveNewTask() {
        if (inputText.length < 10 || inputText.length > 500) {
            setIsError(true);
        } else {
            setIsError(false);
            const newItem = {
                userId: totalData.length + 1,
                id: totalData.length + 1,
                title: inputText,
                completed: false
            };
            setInputText("");
            dispatch(setNewTask(newItem));
            try {
                const res = await setNewTaskAPI(newItem);
                res.error ? alert(res.error) : alert("Завдання успішно додане");
            } catch (error) {
                console.error("Error saving task:", error);
                alert("Не вдалося зберегти завдання.");
            }
        }
    }


    return (
        <HeaderInputRowContainer>
            <HeaderInputContainer>
                <HeaderInput
                    placeholder="Введіть нове завдання"
                    type='text'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    error={isError}

                />
                {isError && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                        {inputText.length < 10
                            ? "Текст завдання занадто короткий"
                            : inputText.length > 500
                                ? "Текст завдання занадто довгий"
                                : ""}
                    </span>
                )}
            </HeaderInputContainer>
            <HeaderInputButton
                onClick={saveNewTask}
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