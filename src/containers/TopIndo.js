import * as React from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import MusicCard from '../components/MusicCard';
const TopIndo = () => {    
  const [musics, setMusic] = useState([]);

  useEffect(() => {
      const fetchMusic = async () => {
          const fetchedMusic = await axios.get('https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=indonesia&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json');
          setMusic(fetchedMusic.data.tracks.track);
          
        }
        
        fetchMusic();
    }, []);

    
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
        
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        
    }}><Typography variant='h1'>TOP 50 Today</Typography></Box>
        
        <Box sx={{
           backgroundColor: 'secondary.dark',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2
        }}>
        {
            musics.map(music => (
                <MusicCard music={music}></MusicCard>
            ))
        }
    </Box>
    </Box>
);
}

export default TopIndo;