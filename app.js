const apiKey = "c43aae2e9c6b95c281dbf38b915b81cb";
const city = "London";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url)
.then(function(response){

    console.log("Weather Data:", response.data);

    const data = response.data;

    displayWeather(data);

})
.catch(function(error){
    console.log("Error fetching weather:", error);
});


function displayWeather(data){

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    document.getElementById("city").innerText = cityName;
    document.getElementById("temperature").innerText = temperature + "°C";
    document.getElementById("description").innerText = description;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById("icon").src = iconUrl;
}