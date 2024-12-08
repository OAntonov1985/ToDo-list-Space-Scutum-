"use client"
import { styled } from '@mui/material';


export const MainListContainer = styled("ul")(() => ({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 24,
    flex: "auto",
    width: "100%"
}));