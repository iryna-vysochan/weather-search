import axios from "axios";

const apiKey = "d7026dd72f31410938d8c5c013b35c33";

export default async function getWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather`;
    const params = {
        q: city,
        appid: apiKey,
        units: 'metric',  
        lang: 'ua'         
    };

    const response = await axios.get(url, { params });
    return response.data;
}
