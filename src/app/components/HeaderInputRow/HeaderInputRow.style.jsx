"use client"
import { styled } from '@mui/material';
import { Colors } from '@/constants/colors';
import { Input, Button } from '@mui/material';
import Image from 'next/image';

export const HeaderInputRowContainer = styled('div')(() => ({
    width: "100%",
    maxWidth: "65%",
    display: "flex",
    gap: 16,
    position: "relative",
    top: 52,
    height: 84
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
    fontWeight: "bold",
    borderRadius: 8,
    height: 56
}));

export const HeaderInputButtonLogo = styled(Image)(() => ({
    marginLeft: 8
}));

export const HeaderInputContainer = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 12
}));