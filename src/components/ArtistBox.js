import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';



function ArtistBox({artis}) {

  
  return (
    
      <Link style={{color:'inherit', textDecoration: 'inherit'}} to={`/Artis/${artis.name}`}><Box sx={{ borderRadius: 3,
        backgroundColor: 'rgba(73, 68, 68, 0.19)', 
        '&:hover': {
       backgroundColor: 'primary.main',
       opacity: [0.9, 0.8, 0.7], }, display: 'flex', flexDirection: 'column', width: 200 }}>
       
          <Typography component="div" variant="h5" color="white">
            {artis.name}
          </Typography>
          
      

        
      </Box></Link>
      
    
  );
}
export default ArtistBox;