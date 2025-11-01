import axios from "axios";

const API_KEY = 'd7026dd72f31410938d8c5c013b35c33';

export default async function getWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather`;
    const params = {
        q: city,
        appid: API_KEY,
        units: 'metric',  
        lang: 'ua'         
    };

    const response = await axios.get(url, { params });
    return response.data;
}
