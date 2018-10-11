import '../src/scss/input.scss';
import '../src/weather-service.js';
import $ from "jquery";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let promise = // code moved to _weather-service.js_

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
// $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[b6907d289e10d714a6e88b30761fae22]`)
