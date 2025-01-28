const selectedCity = document.getElementById('city');
const output = document.getElementById('outputDiv');
const apiKey = 'ee2da39181f22b3802b1514e5429a26e';


selectedCity.addEventListener('change', function() {
    const city = selectedCity.value;
    getWeather(city);
});


function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API issue');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

        
            output.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Note: ${description}</p>
                <p>Humidity: ${humidity}%</p>
            `;
        })
        .catch(error => {
            output.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}


getWeather(selectedCity.value);
