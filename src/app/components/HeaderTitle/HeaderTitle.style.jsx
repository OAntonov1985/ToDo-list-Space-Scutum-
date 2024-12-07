"use client"
import { styled } from '@mui/material';
import { Colors } from '@/constants/colors';
import Image from 'next/image';


export const HeaderTitleContainer = styled('div')(() => ({
    marginTop: 72,
    maxWidth: "65%",
    display: "flex",
    gap: 12,
}));

export const TitleText = styled('h1')(() => ({
    fontSize: 40,
    fontWeight: 700,
    color: Colors.Blue
}));

export const TitleTextSpan = styled('span')(() => ({
    color: Colors.PurpleDark
}));

export const TitleLogo = styled(Image)(() => ({
    position: "relative",
    top: 11
}));