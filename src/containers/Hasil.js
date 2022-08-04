import * as React from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HasilCari from '../components/HasilCari';
const Hasil = () => {    
    const {id} = useParams();
  const [hasils, setHasils] = useState([]);

  useEffect(() => {
      const fetchHasils = async () => {
          const fetchedHasils = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${id}&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json&limit=50`);
          setHasils(fetchedHasils.data.results.artistmatches.artist);
          
        }
        
        fetchHasils();
    }, []);

    
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
        
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        
    }}><Typography variant='h5'>Menampilkan 50 Artist dengan kata : {id}</Typography></Box>
        
        <Box sx={{
           
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2,
        }}>
        {
            hasils.map(hasil => (
                <HasilCari hasil={hasil}></HasilCari>
            ))
        }
    </Box>
    </Box>
);
}

export default Hasil;