import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import {
    ModalText,
    ModalContainer,
    ButtonContainer
} from './Modal.style';
import { HeaderInputButton } from '../HeaderInputRow/HeaderInputRow.style';
import { Colors } from '@/constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen, setIDEdit, setChangeTitleTask } from '@/store/userSclise';
import { saveChangesInTask } from '@/utils/api/setOps';


export default function ModalWindow() {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();

    const isModalOpen = useSelector((state) => state.userData.isModalOpen);
    const idEdit = useSelector((state) => state.userData.idEdit);
    const data = useSelector((state) => state.userData.data);

    useEffect(() => {
        if (idEdit) {
            const itemToEdit = data.filter(item => item.id == idEdit);
            setInputText(itemToEdit[0].title);
        }
    }, [idEdit, data]);

    async function saveChanges() {
        if (idEdit) {
            const itemToEdit = data.filter(item => item.id == idEdit);
            const newData = {
                userId: itemToEdit[0].userId,
                id: itemToEdit[0].id,
                title: inputText,
                completed: itemToEdit[0].completed
            }
            dispatch(setChangeTitleTask(newData));
            dispatch(setIsModalOpen(false));
            dispatch(setIDEdit(null));

            const res = await saveChangesInTask(newData.id, newData);
            alert(res.error ? res.error : "Зміни в завдання внесені успішно");
        }
    }

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
                        <HeaderInputButton onClick={saveChanges} disabled={inputText.length < 10 || inputText.length > 500}>Зберегти</HeaderInputButton>
                    </ButtonContainer>
                </ModalContainer>
            </Modal>
        </>
    )
}