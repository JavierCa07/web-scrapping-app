import { Box, Button } from "@mui/material"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from "react";

export const SearchField = ({ onSearchClick }) => {
    const [queryText, setQueryText] = useState<string>();

    const handleClick = () => {
        onSearchClick(queryText);
    }

    const handleChange = (str: string) => {
        setQueryText(str);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px' }}>
            <BaseTextareaAutosize
                minRows={10}
                maxRows={40}
                aria-label="Search"
                placeholder="Enter your query"
                defaultValue=""
                onChange={(ev) => handleChange(ev.target.value)}
            />
            {/* TODO: pass text content to the function */}
            <Button sx={{ borderRadius: 0, height: '56px' }} variant="contained" onClick={handleClick} >Search</Button>
        </Box>
    )
}