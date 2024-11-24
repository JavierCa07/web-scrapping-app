import { AppBar, Box } from '@mui/material';
import { SearchField } from '../../components/search-field/search-field.component';
import { AppToolbar } from '../../components/app-toolbar/app-toolbar.components';

export const Search = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', background: "#111111" }}>
            <AppBar position="static">
                <AppToolbar />
            </AppBar>
            <Box sx={{ display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center' }}>
                <SearchField />
            </Box>
        </Box>
    )
};

