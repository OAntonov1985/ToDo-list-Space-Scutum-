import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Colors } from '@/constants/colors';



export default function PaginationItem() {
    return (
        <Stack spacing={2} style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
                count={4}
                variant="outlined"
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