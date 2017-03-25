function getWeatherData(city) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=b6fff70a1df60ee9c14b03d5c9f976e1",
        success: function(data) {
            console.log(data);
        }
    })}

$('#searchButton').click(function() {
    var city = $('#inputCity').val();
    getWeatherData(city);
});

console.log('done!!');