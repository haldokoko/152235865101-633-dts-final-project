import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ArtistBox from '../components/ArtistBox';
import GenreBox from '../components/GenreBox';
const Homepage = () => {    
  const [artiss, setArtiss] = useState([]);

  useEffect(() => {
      const fetchArtiss = async () => {
          const fetchedArtiss = await axios.get('https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json&limit=5');
          setArtiss(fetchedArtiss.data.artists.artist);
          
        }
        
        fetchArtiss();
    }, []);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const fetchedGenres = await axios.get('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json&limit=5');
            setGenres(fetchedGenres.data.tags.tag);
            
          }
          
          fetchGenres();
      }, []);

    return (
        
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'secondary.dark',
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '90vh'
            
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'Row',
            ml:2
        }}>
        <Typography variant='h3' color="#F9F5EB" gutterBottom>Hello</Typography></Box>
        <Box sx={{
           
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around', pb: 2, pl:2, pr:2,
        }}>
         <Link style={{color:'inherit', textDecoration: 'inherit'}} to={'/TopWorld'}>
          <Box sx={{
            borderRadius: 3,
           backgroundColor: '#8EC5FC', backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
           '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7], },
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2, pl:2, pt:2, pr:2,
        }}> <Typography sx={{ fontSize: 25 }} color="text.secondary">
        TOP 50 in Worldwide
      </Typography></Box></Link>
      <Link style={{color:'inherit', textDecoration: 'inherit'}} to={'/TopIndo'}>
      <Box sx={{
           borderRadius: 3,
           backgroundColor: '#D9AFD9', backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
           '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7], },
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2, pl:2, pt:2, pr:2,
        }}> <Typography sx={{ fontSize: 25 }} color="text.secondary">
        TOP 50 in Indonesia
      </Typography></Box></Link>

     
      </Box>

      <Box sx={{
            display: 'flex',
            flexDirection: 'Row',
            justifyContent:'space-between',
            ml:2
        }}>
        <Typography variant='h3' color="#F9F5EB" gutterBottom>Top Artist</Typography>
        <Link style={{color:'inherit', textDecoration: 'inherit'}} to={'/TopArtis'}><Button variant="text">See all</Button></Link>
        </Box>
        <Box sx={{
           backgroundColor: 'secondary.dark',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2, ml:2, mr:2
        }}>
        {
            artiss.map(artis => (
                <ArtistBox artis={artis}></ArtistBox>
            ))
        }
    </Box>
      <Box sx={{
            display: 'flex',
            flexDirection: 'Row',
            justifyContent: 'space-between',
            ml:2
        }}>
        <Typography variant='h3' color="#F9F5EB" gutterBottom>Top Genre</Typography>
        <Link style={{color:'inherit', textDecoration: 'inherit'}} to={'/TopGenre'}>
        <Button variant="text">See all</Button>
        </Link>
        </Box>
        
      <Box sx={{
           backgroundColor: 'secondary.dark',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2, ml:2, mr:2
        }}>
        {
            genres.map(genre => (
                <GenreBox genre={genre}></GenreBox>
            ))
        }
    </Box>
      
</Box>
    );
  }
export default Homepage;