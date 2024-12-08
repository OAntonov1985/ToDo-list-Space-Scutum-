"use client";
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '@/store/userSclise';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Colors } from '@/constants/colors';


export default function PaginationItem() {

    const dispatch = useDispatch();
    const activePage = useSelector((state) => state.userData.activePage);
    const pages = useSelector((state) => state.userData.pages);


    return (
        <Stack spacing={2} style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
                count={pages}
                variant="outlined"
                page={activePage}
                onChange={(event, page) => dispatch(setActivePage(page))}
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: Colors.Gray300,
                    },
                    '& .MuiPaginationItem-root:hover': {
                        color: Colors.Gray100,
                        backgroundColor: Colors.PurpleDark,
                    },
                    '& .Mui-selected': {
                        backgroundColor: `${Colors.PurpleDark} !important`,
                        color: `${Colors.Gray100} !important`,
                    },
                }}
            />
        </Stack>
    )
}