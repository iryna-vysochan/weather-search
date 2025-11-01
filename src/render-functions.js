const weatherContainer = document.querySelector('.weather');
const loader = document.querySelector('.span-loader');

export function showWeather(data) {
    const html = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>
    `;
    weatherContainer.innerHTML = html;
}

export function clearWeather() {
    weatherContainer.innerHTML = "";
}

export function showLoader() {
    loader.classList.add('loader');
}

export function hideLoader() {
    loader.classList.remove('loader');
}
