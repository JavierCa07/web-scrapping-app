import { Box, Button } from "@mui/material"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

export const SearchField = ({ onSearchClick }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px' }}>
            <BaseTextareaAutosize
                minRows={10}
                maxRows={40}
                aria-label="Search"
                placeholder="Enter your query"
                defaultValue=""
            />
            {/* TODO: pass text content to the function */}
            <Button sx={{ borderRadius: 0, height: '56px' }} variant="contained" onClick={onSearchClick} >Search</Button>
        </Box>
    )
}