var self = this;
var sum = 0;

function getWeatherData(city) {
	"use strict";
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=b6fff70a1df60ee9c14b03d5c9f976e1",
        success: function(data) {
            console.log(data);
            $('#myModalLabel').html(data.name);
            $('#main').html(data.weather[0].main);
            $('#description').html(data.weather[0].description);
            $('#temp').html('&nbsp' + data.main.temp + '&degC');
            $('#pressure').html('&nbsp&nbsp' + data.main.pressure + ' hpa');
            $('#humidity').html(data.main.humidity +' %');
            $('#temp_min').html(data.main.temp_min + '&degC');
            $('#temp_max').html(data.main.temp_max + '&degC');
            $('#wind').html(data.wind.speed + ' m/s');
            $('#icon').attr('src','img/' + data.weather[0].main + '.png');
        }
    });}


$('#searchButton').click(function() {
	"use strict";
    var city = $('#inputCity').val();
    getWeatherData(city);
    $('#inputCity').val('');
});



function getWeatherDataAverage(city) {
    "use strict";
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=b6fff70a1df60ee9c14b03d5c9f976e1",
        success: function(data) {
            console.log(data);
            sum = sum + Number(data.main.temp);
            $('#averageBody').append("<p class='cities'>" + "Temperature of " + city[0].toUpperCase() + city.slice(1) + " is  " + data.main.temp + '&degC' +"</p>"+ "</p>");
        }
    });}

$('#averageButton').click(function() {
    "use strict";
    $('#averageBody').empty();
    var city1 = $('#inputCity1').val();
    var city2 = $('#inputCity2').val();
    var city3 = $('#inputCity3').val();
    var city4 = $('#inputCity4').val();
    getWeatherDataAverage(city1);
    getWeatherDataAverage(city2);
    getWeatherDataAverage(city3);
    getWeatherDataAverage(city4);

    $(document).ajaxStop(function() {
        console.log(sum/4);
        sum = sum / 4;
        if(sum){
            sum = sum.toPrecision(4);
            $('#averageBody').append("<p id='averagetemp'>" + "Average Temperature is  " + sum.toString() + '&degC' + "</p>");
            sum = 0;
        }
    })
     $('#averageBody').empty();
});

console.log('done!!');


$(document).ready(function() {
	"use strict";
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});
function clearfields() {
	"use strict";
	document.getElementById("uname").value = "";
	document.getElementById("pword").value = "";
	document.getElementById("email").value = "";
	document.getElementById("aname").value = "";
}
clearfields();
