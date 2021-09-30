// create a function that calls the weather api
function clickGetTemperature() {
    console.log('get button clicked')
    const cityInput = document.getElementById('city')
    console.log('the value of the input is', cityInput.value)
    const countryInput = document.getElementById('country')
    console.log('the value of the input is', countryInput.value)
    const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${cityInput.value},${countryInput.value}&appid=0d4774d17d81be27c20d3db54e7d27f3`

    console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.main)
            console.log(data.main.temp)
            document.querySelector('h2').innerText = data.main.temp
            // document.querySelector('h3').innerText = data.explanation
        })
}

// 0d4774d17d81be27c20d3db54e7d27f3
// 

// create url
// https://api.openweathermap.org/data/2.5/weather?q=lasvegas,US&appid=0d4774d17d81be27c20d3db54e7d27f3

//  run the function when it clicks on the button
const getTemperatureButton = document.querySelector('button')
getTemperatureButton.addEventListener('click', clickGetTemperature)
