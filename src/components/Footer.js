import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';




function Footer() {
  return (
    <Box sx={{ position:'flex',
    alignContent: 'center',
    bottom:0,
    left:0,
    width: '100%'}}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Musik Bagus &copy; by Haldoko Perbowo 2022
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Footer;