const axios = require('axios');

const getLugar =  async (dir) => {

    const encodeUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': 'f78ae5996emshe72a6bd46b2cf53p1044afjsn68ebcdf2e7e2'}
    });
    
    const resp = await instance.get()

    if( resp.data.Results.length == 0){
        throw new Error(`No hay resultados para ${dir}`)
        
    }

    const data = resp.data.Results[0];  
    const direccion = data.name;
    const lat       = data.lat;
    const lon       = data.lon;


    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugar
}

