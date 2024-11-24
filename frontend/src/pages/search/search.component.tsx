import { AppBar, Box, Button, TextField, Toolbar, Typography } from '@mui/material';

export const Search = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex' }}>
                    <Typography variant="h6" noWrap component="div">Web Scrapping App</Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ flex: '1' }}>
                <TextField id="outlined-basic" label="Search" variant="outlined" />
                <Button variant="contained">Search</Button>
            </Box>
        </Box>
    )
};

// TODO: componetizar search + button (sacar a otro fichero e importarlo aqui)
// añadir estilos para centrar y poner bonito el buscador