"use client"
import { styled } from '@mui/material';
import { Colors } from '@/constants/colors';
import Image from 'next/image';
import Radio from '@mui/material/Radio';


export const ItemContainer = styled('li')(() => ({
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.Gray400,
    display: "flex",
    gap: 12

}));

export const ItemText = styled('p')(({ isCompleted }) => ({
    color: isCompleted ? Colors.Gray300 : Colors.Gray100,
    textDecoration: isCompleted ? 'line-through' : 'none',
    fontSize: 14,
    lineHeight: "140%",
    display: "flex",
    alignItems: "center",
    flex: "auto",
}));
export const ItemIconContainer = styled('div')(() => ({
    display: "flex",
    gap: 4,
    alignItems: "center",
    marginLeft: 8

}));

export const ItemIcon = styled(Image)(() => ({
    cursor: "pointer"
}));

export const RadioButton = styled(Radio)(() => ({

}));