// 
// Key	Name	Status	Actions
// 8e7d25e63799756fd9e63cf0ff6e1204

//To disable auto fill drop down in browser. 
// Issue is when hovering over or clicking autofill options the background of search bar becomes white and text becomes black. That's why.
// document.getElementById("searchBarInput").setAttribute("autocomplete", "off");

const date=document.getElementById("date");
const city= document.getElementById("city");
const temp= document.getElementById("temp");
const tempImg= document.getElementById("tempImg");
const description= document.getElementById("description");
const tempMin= document.getElementById("tempMin");
const tempMax= document.getElementById("tempMax");
const searchBarInput = document.getElementById("searchBarInput");
const searchIcon= document.getElementById("searchIcon")
const app= document.getElementById("app");

const months= ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let dateObj = new Date();
//dateObj is an instance of Date class or an object of Date class
let month=months[dateObj.getUTCMonth()];
let day= dateObj.getUTCDate();
let year= dateObj.getUTCFullYear();

date.innerHTML=`${month} ${day}, ${year}`;



const getWeather = async()=>{
    try{
        const cityName= document.getElementById("searchBarInput").value; 
        
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=8e7d25e63799756fd9e63cf0ff6e1204`, {
            headers:{
                Accept: "application/json"
            }
        })
        const weatherData =await weatherDataFetch.json();
        
        city.innerHTML=`${weatherData.name}`;
        tempImg.innerHTML=`<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png"/>`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;
        tempMax.innerHTML=`${weatherData.main.temp_max}°C`;
        tempMin.innerHTML=`${weatherData.main.temp_min}°C`;
        description.innerHTML=`${weatherData.weather[0].description}`;

    }
    catch(err){
        console.log(err)
    }    
}

searchIcon.addEventListener("click", getWeather);


