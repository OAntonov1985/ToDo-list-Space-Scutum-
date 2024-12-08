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
import edit from "@/app/public/icons/icons8-edit.svg";
import trash from "@/app/public/icons/trash.svg";
import { Colors } from '@/constants/colors';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '@/store/userSclise';



export default function ItemInList({ item }) {

    const [isSelected, setSsSelected] = useState(item.completed);
    const dispatch = useDispatch();

    if (!item) {
        return null;
    }

    return (
        <ItemContainer>
            <RadioButton
                onClick={() => setSsSelected((prev) => !prev)}
                checked={isSelected}
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
                    onClick={() => dispatch(setIsModalOpen(true))}
                />
                <ItemIcon
                    src={trash}
                    id={item.id}
                    alt='icon delete'
                    width={24}
                    height={24}
                />
            </ItemIconContainer>
            <ModalWindow />
        </ItemContainer>
    );
}