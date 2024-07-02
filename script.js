


const key = "9a4139799b14e98510ecc42f4d16ef35"


function showScreen(data) {
    
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-temp").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%" 
    document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

}

async function searchCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())

    showScreen(data)

}

function clickButton() {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}