import * as React from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AllGenre from '../components/AllGenre';
const TopGenre = () => {   
  const [Allgenres, setAllgenres] = useState([]);

  useEffect(() => {
      const fetchAllgenres = async () => {
          const fetchedAllgenres = await axios.get('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json');
          setAllgenres(fetchedAllgenres.data.tags.tag);
          
        }
        
        fetchAllgenres();
    }, []);

    
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
        
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        
    }}><Typography variant='h3'>Top 50 Genres</Typography></Box>
        
        <Box sx={{
           
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2,
        }}>
        {
            Allgenres.map(genre => (
                <AllGenre genre={genre}></AllGenre>
            ))
        }
    </Box>
    </Box>
);
}

export default TopGenre;