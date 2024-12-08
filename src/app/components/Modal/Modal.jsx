import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import {
    ModalText,
    ModalContainer,
    ButtonContainer
} from './Modal.style';
import { HeaderInputButton } from '../HeaderInputRow/HeaderInputRow.style';
import { Colors } from '@/constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen } from '@/store/userSclise';


const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt porro earum illum quia magnam sapiente sit similique ipsa dolores tenetur, nemo id qui? Voluptatum commodi necessitatibus, molestias accusantium odio itaque!"

export default function ModalWindow() {
    const [inputText, setInputText] = useState(text);
    const isModalOpen = useSelector((state) => state.userData.isModalOpen);
    const dispatch = useDispatch();

    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={() => dispatch(setIsModalOpen(false))}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalContainer >
                    <ModalText
                        id="outlined-multiline-flexible"
                        multiline
                        error={inputText.length < 10 || inputText.length > 500}
                        helperText={
                            inputText.length < 10
                                ? "Текст завдання занадто короткий"
                                : inputText.length > 500
                                    ? "Текст завдання занадто довгий"
                                    : ""
                        }
                        minRows={4}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root.Mui-error': {
                                borderColor: Colors.Gray100,
                            },
                            '& .MuiFormHelperText-root.Mui-error': {
                                color: Colors.Gray100,
                                fontSize: 16,
                            },
                        }}
                    />
                    <ButtonContainer>
                        <HeaderInputButton onClick={() => (dispatch(setIsModalOpen(false)), setInputText(text))} >Відміна</HeaderInputButton>
                        <HeaderInputButton onClick={() => dispatch(setIsModalOpen(false))} disabled={inputText.length < 10 || inputText.length > 500}>Зберегти</HeaderInputButton>
                    </ButtonContainer>
                </ModalContainer>
            </Modal>
        </>
    )
}