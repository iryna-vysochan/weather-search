import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getWeatherByCity from "./weather-api.js";
import * as render from "./render-functions.js";

const form = document.querySelector('.form');

form.addEventListener('submit', handleSearch);

async function handleSearch(evt) {
    evt.preventDefault();
    render.clearWeather();

    const city = evt.target.elements['search-text'].value.trim();
    form.reset();

    if (!city) {
        iziToast.warning({ 
            message: "Please enter a city!", 
            position: "topRight" 
        });
        return;
    }

    try {
        render.showLoader();
        const data = await getWeatherByCity(city);
        render.hideLoader();

        render.showWeather(data);

    } catch (error) {
        render.hideLoader();
        iziToast.error({ 
            message: "City not found or an error occurred!", 
            position: "topRight" 
        });
    }
}
