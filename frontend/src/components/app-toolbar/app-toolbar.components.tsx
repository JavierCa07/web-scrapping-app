import { Toolbar, Typography } from "@mui/material"

export const AppToolbar = () => {
  return (
    <Toolbar sx={{ display: 'flex' }}>
        <Typography variant="h6" noWrap component="div">Quote citation searcher</Typography>
    </Toolbar>
  )
}