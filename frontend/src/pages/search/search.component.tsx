import { Alert, AppBar, Box } from '@mui/material';
import { SearchField } from '../../components/search-field/search-field.component';
import { AppToolbar } from '../../components/app-toolbar/app-toolbar.components';
import { ResultList } from '../../components/result-list/result-list.component';
import { AppDescription } from '../../components/app-description/app-description';

export const Search = ({ onSearchClick, results, resetResults, timeEstimation }) => {
    const isResults = results?.length > 0; // do we have results?
    const noResultsFound = Array.isArray(results) && results.length === 0; // is the array empty?
    // Box: is a container component that layouts its children component in the screen
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* AppBar: is the top bar of the application */}
            <AppBar position="sticky" sx={{ background: '#222222'}}>
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
                <AppDescription />
                <SearchField onSearchClick={onSearchClick} isResults={isResults} noResultsFound={noResultsFound} resetResults={resetResults} />
                {
                    timeEstimation &&
                    (
                        <Alert variant="filled" severity="info">
                            {timeEstimation}
                        </Alert>
                    )
                }
                { isResults &&  <ResultList results={results} /> }
            </Box>
        </Box>
    )
};
