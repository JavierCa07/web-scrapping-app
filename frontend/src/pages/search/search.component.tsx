import { AppBar, Box } from '@mui/material';
import { SearchField } from '../../components/search-field/search-field.component';
import { AppToolbar } from '../../components/app-toolbar/app-toolbar.components';
import { ResultList } from '../../components/result-list/result-list.component';

export const Search = ({ onSearchClick, results }) => {
    const isResults = results?.length > 0;
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <AppBar position="sticky">
                <AppToolbar />
            </AppBar>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', justifyContent: 'center', alignItems: 'center' }}>
                <SearchField onSearchClick={onSearchClick} isResults={isResults} />
                { isResults &&  <ResultList results={results} /> }
            </Box>
        </Box>
    )
};

