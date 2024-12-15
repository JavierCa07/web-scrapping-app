import { Box, Button, TextField } from "@mui/material"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from "react";

export const SearchField = ({ onSearchClick, isResults }) => {
    const [queryText, setQueryText] = useState<string>();
    const [isFocused, setIsFocused] = useState(false);

    const handleClick = () => {
        if (queryText) {
            onSearchClick(queryText);
        }
    }

    const handleChange = (str: string) => {
        setQueryText(str);
    }

    const handleFocus = () => {
      setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
      }

    const renderExpandedSearch = () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px', position: 'sticky', top: '74px', marginBottom: "10px" }}>
            <BaseTextareaAutosize
            minRows={10}
            maxRows={30}
            aria-label="Search"
            placeholder="Enter your query"
            defaultValue={queryText}
            onChange={(ev) => handleChange(ev.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ padding: "10px" }}
        />
            <Button sx={{ borderRadius: 0, height: '56px' }} variant="contained" onClick={handleClick} disabled={!queryText} >Search</Button> 
        </Box>
    )

    const renderCollapsedSearch = () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px', position: 'sticky', top: '64px' }}>
            <BaseTextareaAutosize
            minRows={1}
            maxRows={2}
            aria-label="Search"
            placeholder="Enter your query"
            defaultValue={queryText}
            onChange={(ev) => handleChange(ev.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        </Box>
    )

    return !isFocused && isResults ? renderCollapsedSearch() : renderExpandedSearch()
}