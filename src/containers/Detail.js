import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams, } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Detail() {
  
    const {id} = useParams();
    const [lagus, setLagus] = useState([]);
    const [wikis, setWikis] = useState([]);
    const [artist, setArtist] = useState([]);
    const [tag, settag] = useState([]);
    const [tag2, settag2] = useState([]);
    const [tag3, settag3] = useState([]);
  useEffect(() => {
      const fetchLagus = async () => {
          const fetchedLagus = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=bcb121d5b34307d45e80fc2c0a2097e3&${id}&format=json`);
          setLagus(fetchedLagus.data.track);
          setWikis(fetchedLagus.data.track.album);
          setArtist(fetchedLagus.data.track.artist);
          settag(fetchedLagus.data.track.toptags.tag[0].name);
          settag2(fetchedLagus.data.track.toptags.tag[1].name);
          settag3(fetchedLagus.data.track.toptags.tag[2].name);
        }
        
        fetchLagus();
    }, []);
    
    return (
    <Card sx={{ maxWidth: 2000 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
         Judul: <span></span> {lagus.name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
         Penyanyi: <span></span> {artist.name}
        </Typography>
        <Typography variant="h5">
          Album: <span></span>
         {wikis.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{tag}</Button>
        <Button size="small">{tag2}</Button>
        <Button size="small">{tag3}</Button>
      </CardActions>
    </Card>
  );
}
export default Detail;
