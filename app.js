document.getElementById('searchBtn').addEventListener('click', load)
    // document.getElementById('temperature').innerText = ;



function load() {
    const searchValue = document.getElementById('search').value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + searchValue + '&appid=6ced4c65c931982f4f3f64148537b86d')
        .then(resopon => resopon.json())
        .then(data => dataparse(data))

    // .catch(alert('Sorry can not find your location'));
}

function dataparse(adata) {
    const fahrenheight = adata.main.temp;
    const temp = fahrenheight - 273;
    const celci = Math.round(temp);
    document.getElementById('temperature').innerText = celci;
    const sunrise = adata.sys.sunrise;
    const sunset = adata.sys.sunset;

    document.getElementById('sunrise').innerText = sun(sunrise);

    document.getElementById('sunset').innerText = sun(sunset)
}

function sun(unix_timestamp) {
    // let unix_timestamp = 1549312452
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    // console.log(formattedTime);
    return formattedTime;
}