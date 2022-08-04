import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



function MusicCard({music}) {

  
  return (
    <Card id={music.playcount} sx={{ display: 'flex', flexWrap: 'wrap', maxwidth: 500, height: 200, mt: 2, ml: 2, mr: 2}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 200 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {music.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {music.artist.name}
          </Typography>
         
        </CardContent>

        <Box sx={{pb:2}}>
        <Button variant='contained'>
      <Link style={{color:'inherit', textDecoration: 'inherit'}} to={`/detail/artist=${music.artist.name}&track=${music.name}`}>Detail Lagu</Link>
      </Button>
      </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
        alt="Live from space album cover"
      />
    </Card>
    
  );
}
export default MusicCard;