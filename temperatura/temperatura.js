const axios = require('axios');

const getClima = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=497c14a438fd0a93a4ffd99aa314b460`)
    return resp.data.main.temp;

    //console.log(resp.data.main)
}

module.exports = {
    getClima
}