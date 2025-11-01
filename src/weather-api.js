import axios from "axios";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

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
