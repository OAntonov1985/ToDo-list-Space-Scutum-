"use client"
import { styled } from '@mui/material';
import { Colors } from '@/constants/colors';


export const MainContainer = styled('main')(() => ({
    flex: "auto",
    paddingTop: 90,
    backgroundColor: Colors.Gray600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50

}));

export const MainContainerInfo = styled('div')(() => ({
    width: "100%",
    maxWidth: "65%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "auto"
}));