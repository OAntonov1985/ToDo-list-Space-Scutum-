"use client"
import { styled } from '@mui/material';
import { Colors } from '@/constants/colors';


export const HeaderContainer = styled('div')(() => ({
    height: 200,
    backgroundColor: Colors.Gray700,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
}));