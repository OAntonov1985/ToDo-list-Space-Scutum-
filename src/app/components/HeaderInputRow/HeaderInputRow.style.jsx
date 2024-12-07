"use client"
import { styled } from '@mui/material';
import { Colors } from '@/constants/colors';
import { Input, Button } from '@mui/material';
import Image from 'next/image';

export const HeaderInputRowContainer = styled('div')(() => ({
    width: "100%",
    maxWidth: "65%",
    display: "flex",
    gap: 8,
    position: "relative",
    top: 28
}));

export const HeaderInput = styled(Input)(() => ({
    width: "100%",
    backgroundColor: Colors.Gray400,
    borderRadius: 8,
    padding: 12,
    color: Colors.Gray300,
    fontSize: 16,
    border: "none",
    '&:focus-visible': {
        outline: "none",
        border: "none",
        boxShadow: "none",
    },
}));


export const HeaderInputButton = styled(Button)(() => ({
    padding: 16,
    backgroundColor: Colors.BlueDark,
    color: Colors.Gray100,
    fontSize: 14,
    fontWeight: "bold"
}));

export const HeaderInputButtonLogo = styled(Image)(() => ({
    marginLeft: 8
}));
