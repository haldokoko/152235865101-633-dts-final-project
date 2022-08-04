import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import AlbumBox from '../components/AlbumBox';
import SongBox from '../components/SongBox';
import Serupa from '../components/Serupa';
function Artists() {
    const {id} = useParams();
    const [nama, setNama] = useState([]);
    const [bio, setBio] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const [similiars, setSimiliars] = useState([]);
    
  useEffect(() => {
      const fetchnama = async () => {
          const fethcednama = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${id}&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json`);
         setNama(fethcednama.data.artist);
         setSimiliars(fethcednama.data.artist.similar.artist);
         setBio(fethcednama.data.artist.bio);
         const fetchedalbum = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${id}&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json&limit=5`);
         setAlbums(fetchedalbum.data.topalbums.album);
         const fetchedSongs = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${id}&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json&limit=5`);
         setSongs(fetchedSongs.data.toptracks.track);
        }
        
        fetchnama();
    }, []);
    
    return (
    <Card sx={{ maxWidth: 2000, display:'flex', flexWrap:'wrap', flexDirection: 'row', justifyContent:'flex-start'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
         {nama.name}
        </Typography>
        <Typography variant="body1">
        {bio.content}
        </Typography>
        <Typography variant="h4">
        Top Album: 
        </Typography>
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2, ml:2, mr:2
        }}>
        {
            albums.map(album => (
                <AlbumBox album={album}></AlbumBox>
            ))
        }
    </Box>
    <Typography variant="h4">
        Top Track: 
        </Typography>
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2, ml:2, mr:2
        }}>
        {
            songs.map(song => (
               <SongBox song={song}></SongBox>
            ))
        }
    </Box>
    <Typography variant="h4">
        Similar Artists
        </Typography>
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', pb: 2, ml:2, mr:2
        }}>
        {
            similiars.map(similiar => (
               <Serupa similiar={similiar}></Serupa>
            ))
        }
    </Box>
      </CardContent>
      
    </Card>
  );
}
export default Artists;
