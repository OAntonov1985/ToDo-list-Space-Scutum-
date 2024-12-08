'use client'
import {
    ItemContainer,
    ItemText,
    ItemIcon,
    ItemIconContainer,
    RadioButton
} from './ItemInList.style';
import ModalWindow from '../Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen, setChangeStatus, deleteItem, setIDEdit } from '@/store/userSclise';
import { setTaskStatus, deleteTaskAPI } from '@/utils/api/setOps';

import edit from "@/app/public/icons/icons8-edit.svg";
import trash from "@/app/public/icons/trash.svg";
import { Colors } from '@/constants/colors';



export default function ItemInList({ item }) {

    const [isSelected, setSsSelected] = useState(item.completed);
    const dispatch = useDispatch();
    // const currentData = useSelector((state) => state.userData.currentData)
    // const data = useSelector((state) => state.userData.data)
    // // console.log(currentData)
    // // console.log(data)

    async function changeCompletedStatusTask(id) {
        const newData = {
            id: id,
            completed: !isSelected
        };
        dispatch(setChangeStatus(newData));
        setSsSelected((prev) => !prev);
        // const res = await setTaskStatus(newData);   Виклик методу зміни статусу завдання
        // alert(res.error)
    }

    async function deleteItemTask(id) {
        dispatch(deleteItem(id));
        const res = await deleteTaskAPI(id);
        alert(res.error ? res.error : "Видалення завдання пройшло успішно");
    }

    function editTask(id) {
        dispatch(setIDEdit(id));
        dispatch(setIsModalOpen(true));
    }

    if (!item) {
        return null;
    }

    return (
        <ItemContainer>
            <RadioButton
                onClick={(e) => changeCompletedStatusTask(e.target.id)}
                checked={isSelected}
                id={item.id}
                sx={{
                    color: Colors.Blue,
                    '&.Mui-checked': {
                        color: Colors.PurpleDark,
                    },
                }}
            />
            <ItemText isCompleted={isSelected}>{item.title}</ItemText>
            <ItemIconContainer>
                <ItemIcon
                    src={edit}
                    id={item.id}
                    alt='icon edit'
                    width={24}
                    height={16}
                    onClick={(e) => editTask(+e.target.id)}
                />
                <ItemIcon
                    src={trash}
                    id={item.id}
                    alt='icon delete'
                    width={24}
                    height={24}
                    onClick={(e) => deleteItemTask(e.target.id)}
                />
            </ItemIconContainer>
            <ModalWindow item={item} />
        </ItemContainer>
    );
}