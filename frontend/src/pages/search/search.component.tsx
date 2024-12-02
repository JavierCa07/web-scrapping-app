import { AppBar, Box } from '@mui/material';
import { SearchField } from '../../components/search-field/search-field.component';
import { AppToolbar } from '../../components/app-toolbar/app-toolbar.components';
import { ResultList } from '../../components/result-list/result-list.component';

export const Search = ({ onSearchClick, results }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', background: "#111111" }}>
            <AppBar position="static">
                <AppToolbar />
            </AppBar>
            <Box sx={{ display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center' }}>
                <SearchField onSearchClick={onSearchClick} />
                {/* <ResultList results={results} /> */}
                {/* TODO: uncomment this component once it doesn't break the layout */}
            </Box>
        </Box>
    )
};

