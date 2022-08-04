import * as React from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AllArtis from '../components/AllArtis';
const TopArtis = () => {   
  const [AllArtists, setAllArtists] = useState([]);

  useEffect(() => {
      const fetchAllArtists = async () => {
          const fetchedAllArtists = await axios.get('https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json');
          setAllArtists(fetchedAllArtists.data.artists.artist);
          
        }
        
        fetchAllArtists();
    }, []);

    
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
        
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        
    }}><Typography variant='h3'>Top 50 Artists</Typography></Box>
        
        <Box sx={{
           
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2,
        }}>
        {
            AllArtists.map(artis => (
                <AllArtis artis={artis}></AllArtis>
            ))
        }
    </Box>
    </Box>
);
}

export default TopArtis;