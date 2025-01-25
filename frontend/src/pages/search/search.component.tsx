import { Alert, AppBar, Box } from '@mui/material';
import { SearchField } from '../../components/search-field/search-field.component';
import { AppToolbar } from '../../components/app-toolbar/app-toolbar.components';
import { ResultList } from '../../components/result-list/result-list.component';

export const Search = ({ onSearchClick, results, resetResults }) => {
    const isResults = results?.length > 0;
    const noResultsFound = Array.isArray(results) && results.length === 0;
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <AppBar position="sticky">
                <AppToolbar />
            </AppBar>
            {
                noResultsFound && 
                (
                    <Alert variant="filled" severity="info">
                    No results found
                    </Alert>
                )
            }
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', justifyContent: 'center', alignItems: 'center' }}>
                <SearchField onSearchClick={onSearchClick} isResults={isResults} noResultsFound={noResultsFound} resetResults={resetResults} />
                { isResults &&  <ResultList results={results} /> }
            </Box>
        </Box>
    )
};

