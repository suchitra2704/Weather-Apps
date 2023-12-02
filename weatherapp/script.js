const inputbox = document.querySelector('.inputbox')
const search = document.querySelector('#search')
const weather_img = document.querySelector('.weather-img')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const wind_speed = document.querySelector('.wind-speed')
const location_not=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');
async function checkWeather(city) {
    const api_key = "646408165243363c22228c1cb66dd47c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data )
    if(weather_data.cod==='404')
    // if the API response code is ==="404"
    {
        location_not.style.display="flex"; // display Sorry,Location Not Found
        weather_body.style.display="none"; // hide the information container
        return;
    }
    //// if the API response code is ==="404"
    location_not.style.display="none";// hide the location-not-found container
    weather_body.style.display="flex";// display the information container
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} °C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}% humidity`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    switch (weather_data.weather[0].main.toLowerCase()) {
        case 'broken clouds':
            weather_img.src = "brokenclouds.jfif";
            break;
        case 'rain':
            weather_img.src = "rain.png";
            break;
        case 'haze':
            weather_img.src = "haze.webp";
            break;
        case 'clear':
            weather_img.src = "sunny.jpg";
            break;
        case 'mist':
            weather_img.src = "mist1.png";
            break;
        case 'fog':
            weather_img.src = "fog.png";
            break;
        case 'snow':
            weather_img.src = "snow.png";
            break;
        default:
            weather_img.src = "natureimg1.jfif";
            break;
    }
    

    //  console.log(weather_data)
}


search.addEventListener('click', () => {
    checkWeather(inputbox.value);
});


