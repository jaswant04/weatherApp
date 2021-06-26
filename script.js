const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

const API_KEY = "b0043dde33284bea91b253babfa3f1e9";

button.addEventListener('click', () => {

    const cityInput = inputTxt.value;
    // console.log(cityInput);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}`)
    .then( res=> res.json())
    .then(data => {
        console.log(data);
        var temp_cl = data['main']['temp'];
        temp_cl = temp_cl-273.25;
        temp_cl = Math.round(temp_cl);

        inputTxt.value = "";

        showData.innerHTML = `
        
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${temp_cl}°C</li> 

                                </ul>
                            `
    })

})
