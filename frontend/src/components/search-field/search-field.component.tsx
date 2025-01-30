import { Box, Button, TextField } from "@mui/material"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { useEffect, useState } from "react";

export const SearchField = ({ onSearchClick, isResults, noResultsFound, resetResults }) => {
    const [queryText, setQueryText] = useState<string>();
    const [searchExpanded, setSearchExpanded] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isResults) {
            setSearchExpanded(false);
            setLoading(false);
        }
        if (noResultsFound) {
            setLoading(false);
        }
    }, [isResults, noResultsFound]);

    const handleClick = () => {
        if (queryText) {
            setLoading(true);
            resetResults();
            onSearchClick(queryText);
        }
    }

    const handleChange = (str: string) => {
        setQueryText(str);
    }

    const handleFocus = () => {
        setSearchExpanded(true);
    }
    
    const renderExpandedSearch = () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px', position: 'sticky', top: '74px', marginBottom: "10px" }}>
            <BaseTextareaAutosize
            minRows={10}
            maxRows={30}
            maxLength={500}
            aria-label="Search"
            placeholder="Enter your query"
            defaultValue={queryText}
            onChange={(ev) => handleChange(ev.target.value)} 
            onFocus={handleFocus}
            style={{ padding: "10px" }}
        />
            <Button sx={{ borderRadius: 0, height: '56px' }} variant="contained" onClick={handleClick} disabled={!queryText} loading={loading}>Search</Button> 
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
            />
        </Box>
    )

    return searchExpanded ? renderExpandedSearch() : renderCollapsedSearch();
}