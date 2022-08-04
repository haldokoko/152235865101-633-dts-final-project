import React, { useState, useEffect } from 'react';

const LastFmData = () => {
  const [lfmData, updateLfmData] = useState({});
  
  useEffect(() => {
    fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=bcb121d5b34307d45e80fc2c0a2097e3&format=json')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => updateLfmData(data))
      .catch(() =>
        updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
      );
  }, []);
  
  const buildLastFmData = () => {
    const  { error } = lfmData;
    const track = lfmData?.tracks?.track;

  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!track) {
      return <p>Loading</p>;
    }
  
    const [
        { name: songName, artist: { name: artistName } } = {}
      ] = track;

  
    return <div><h3>Currently listening to: {songName} by {artistName}</h3>
    <h3>Currently listening to: {songName} by {artistName}</h3></div>
    ;
  };

  return buildLastFmData();
};

export default LastFmData;