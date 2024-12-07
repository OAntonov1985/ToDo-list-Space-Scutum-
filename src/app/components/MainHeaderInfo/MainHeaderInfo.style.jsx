"use client"
import { styled } from '@mui/material';
import { Colors } from '@/constants/colors';


export const MainHeaderInfoContainer = styled('div')(() => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 24,
    width: "100%"

}));
export const HeadrItemContainer = styled('div')(() => ({
    display: "flex",
    gap: 8
}));


export const HeadrText = styled('div')(() => ({
    color: Colors.Purple,
    fontSize: 14,
    fontWeight: 700
}));


export const HeadrNumber = styled('div')(() => ({
    minWidth: 19,
    height: 19,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9.5,
    padding: "2px 8px",
    backgroundColor: Colors.Gray400,
    color: Colors.Gray200,
    fontSize: 12,
    fontWeight: 700
}));