import { Box, Button } from "@mui/material"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

export const SearchField = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px' }}>
            <BaseTextareaAutosize
                minRows={10}
                maxRows={40}
                aria-label="Search"
                placeholder="Enter your query"
                defaultValue=""
            />
            <Button sx={{ borderRadius: 0, height: '56px' }} variant="contained" >Search</Button>
        </Box>
    )
}