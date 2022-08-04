import * as React from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopArtistGenre from '../components/TopArtistGenre';
const Genre = () => {    
    const {id} = useParams();
  const [tops, setTops] = useState([]);

  useEffect(() => {
      const fetchTops = async () => {
          const fetchedTops = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${id}&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json`);
          setTops(fetchedTops.data.topartists.artist);
          
        }
        
        fetchTops();
    }, []);

    
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
        
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        
    }}><Typography variant='h1'>TOP 50 {id} Artists</Typography></Box>
        
        <Box sx={{
           
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2,
        }}>
        {
            tops.map(top => (
                <TopArtistGenre top={top}></TopArtistGenre>
            ))
        }
    </Box>
    </Box>
);
}

export default Genre;