import axios from "axios";

const Method ='chart.gettoptracks';
const API_KEY ='bcb121d5b34307d45e80fc2c0a2097e3';
const baseurl = 'http://ws.audioscrobbler.com/';
const Format = 'json';


const lastfm = axios.create({
    baseURL: baseurl,
    params: {
        method: Method,
        api_key: API_KEY,
        format: Format,
    },
});

export default lastfm;