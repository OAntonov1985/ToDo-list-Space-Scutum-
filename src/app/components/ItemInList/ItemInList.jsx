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


export default function ItemInList() {
    const [isSelected, setSsSelected] = useState(false);

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
            <ItemText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro amet fugiat numquam eligendi repudiandae eaque aperiam iure perferendis sunt qui, velit beatae minus molestiae doloremque voluptatibus fuga maiores voluptatem?
            </ItemText>
            <ItemIconContainer>
                <ItemIcon
                    src={edit}
                    width={24}
                    height={16}
                />
                <ItemIcon
                    src={trash}
                    width={24}
                    height={24}
                />
            </ItemIconContainer>
            <ModalWindow />
        </ItemContainer>
    )
}