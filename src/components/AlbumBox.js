import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



function AlbumBox({album}) {

  
  return (
    
      <Box sx={{ borderRadius: 3,
        backgroundColor: 'rgba(73, 68, 68, 0.19)', 
        '&:hover': {
       backgroundColor: 'primary.main',
       opacity: [0.9, 0.8, 0.7], }, display: 'flex', flexDirection: 'column', width: 200, pt:2, pb:2}}>
       
          <Typography component="div" variant="h5" color="black">
            {album.name}
          </Typography>
          
      

        
      </Box>
      
    
  );
}
export default AlbumBox;