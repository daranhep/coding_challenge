var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});



/*
  ========================================
  WEATHER APP
  ========================================
*/

var weatherClick = document.querySelector("#open-button");
var zipCode;
var APPID = "0c49a96e66f4ecc00b529fc549d54316";
var temp;
var description;
var icon;

function updateByZip(zip) {
  var url = "http://api.openweathermap.org/data/2.5/weather?" +
    "zip=" + zip +
    "&APPID=" + APPID;
  sendRequest(url);
}

function sendRequest(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
      weather.temp = K2F(data.main.temp);
      weather.description = data.weather[0].description;
      console.log(data);
      update(weather);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function K2F(k) {
  return Math.round(((k - 273.15) * 1.8) + 32)
}

function update(weather) {
  temp.innerHTML = weather.temp
  description.innerHTML = weather.description
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");

}

weatherClick.addEventListener("click", function() {
  temp = document.getElementById("temperature");
  description = document.getElementById("description");
  zipCode = document.getElementById("zip").value;
  console.log(zipCode);
  updateByZip(zipCode);
});
