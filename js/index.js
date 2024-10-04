var todayName = document.getElementById("todayName");
var todayNumber = document.getElementById("todayNumber");
var todayMonth = document.getElementById("todayMonth");


var country = document.getElementById("country");
var todayTemp = document.getElementById("todayTemp");
var icon = document.getElementById("icon");
var desc = document.getElementById("desc");
var date =new Date()
console.log(date.getDate());
console.log(date.toLocaleDateString("en-US",{weekday:"long"}));
console.log(date.toLocaleDateString ("en-US",{month:"long"}))


var secondIcon = document.getElementById("secondIcon")
var secondMaxTemp = document.getElementById("secondMaxTemp")
var secondMinTemp = document.getElementById("secondMinTemp")
var secondDesk = document.getElementById("secondDesk")
var nextDay = document.getElementById("nextDay")


var thirdIcon = document.getElementById("thirdIcon")
var thirdMaxTemp = document.getElementById("thirdMaxTemp")
var thirdMinTemp = document.getElementById("thirdMinTemp")
var thirdDesc = document.getElementById("thirdDesc")
var thirdDay = document.getElementById("thirdDay")


var search = document.getElementById("search");
async function results(city) {
  var response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=a52e39af5f454dbbaa0232231240310&q=${city}&days=3`
  );
  var apiData = await response.json();
  return apiData;
}
function displayToday(weather) {
  var todayDate = new Date()
  todayName.innerHTML = todayDate.toLocaleDateString("en-US",{weekday:"long"})
  todayNumber.innerHTML = todayDate.getDate()
  todayMonth.innerHTML = todayDate.toLocaleDateString("en-US",{month:"long"})
  country.innerHTML = weather.location.name;
  todayTemp.innerHTML = weather.current.temp_c + " oc ";
  icon.setAttribute("src","https:"+ weather.current.condition.icon)
  desc.innerHTML = weather.current.condition.text;
}
function displayNext(weather) {
  secondIcon.setAttribute("src","https:"+weather.forecast.forecastday[1].day.condition.icon)
  secondMaxTemp.innerHTML = weather.forecast.forecastday[1].day.maxtemp_c+" oc "
  secondMinTemp.innerHTML = weather.forecast.forecastday[1].day.mintemp_c+" oc "
  secondDesk.innerHTML = weather.forecast.forecastday[1].day.condition.text
  var nextDate =new Date( weather.forecast.forecastday[1].date)
  nextDay.innerHTML =nextDate.toLocaleDateString("en-US",{weekday:"long"})

}
function dispalyThird(weather) {
  thirdIcon.setAttribute("src","https:" + weather.forecast.forecastday[2].day.condition.icon)
  thirdMaxTemp.innerHTML = weather.forecast.forecastday[2].day.maxtemp_c+" oc "
  thirdMinTemp.innerHTML = weather.forecast.forecastday[2].day.mintemp_c+" oc "
  thirdDesc.innerHTML = weather.forecast.forecastday[2].day.condition.text
  var nextDate =new Date( weather.forecast.forecastday[2].date)
  thirdDay.innerHTML =nextDate.toLocaleDateString("en-US",{weekday:"long"})

}

 
  
 


async function allWeather(city="cairo") {
  var WeatherData = await results(city);
    displayToday(WeatherData);
  displayNext(WeatherData);
  dispalyThird(WeatherData)
  
}
allWeather();
search.addEventListener("input",function(){
  allWeather(search.value)
  
})