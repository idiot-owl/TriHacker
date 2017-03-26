function getWeatherData(city) {
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
    })}

$('#searchButton').click(function() {
    var city = $('#inputCity').val();
    getWeatherData(city);
    $('#inputCity').val('');
});

console.log('done!!');
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});

