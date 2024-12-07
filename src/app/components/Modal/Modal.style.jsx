"use client"
import { styled } from '@mui/material';
import { Colors } from '@/constants/colors';
import TextField from '@mui/material/TextField';


export const ModalContainer = styled('div')(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: `2px solid ${Colors.Gray700}`,
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    padding: 32,
    backgroundColor: Colors.Gray300,
    display: "flex",
    flexDirection: "column",
    gap: 24

}));

export const ModalText = styled(TextField)(() => ({
    color: Colors.Gray100,
    fontSize: 16,
    lineHeight: "140%",
    width: "100%"
}));

export const ModalButton = styled('button')(() => ({
    color: Colors.Gray100,
    fontSize: 16,
    lineHeight: "140%"
}));

export const ButtonContainer = styled('button')(() => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: Colors.Gray300,
    border: "none"
}));


