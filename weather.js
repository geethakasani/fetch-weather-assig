//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = '979bb5de3fcd94e2648b19a9909c3235';

const getWeatherData = (city) => {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
   fetch(url) .then(response => { 
     if (!response.ok) { 
       throw new Error('Failed to fetch weather data.'); 
  }
   return response.json(); 
  }) 
  .then(data => { 
    const date=new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
    const weatherDataHTML = 
    ` <h2> ${data.name}</h2> 
    <p>${date}</p>
    <p> ${data.main.temp}°C</p>
    <p> ${data.weather[0].description}</p>`;
   document.getElementById('weatherData').innerHTML = weatherDataHTML; 
  }) 
  .catch(error => {
     console.error('Error:', error.message);
   document.getElementById('weatherData').innerHTML = 'Error: Failed to fetch weather data.';
   }); 
  }; 
  document.getElementById('getWeather').addEventListener('click', () => { 
    const cityName = document.getElementById('cityInput').value; getWeatherData(cityName); 
});
});