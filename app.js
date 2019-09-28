const lugar = require('./lugar/lugar');
const clima = require('./temperatura/temperatura');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: '',
        demand: true
    }
}).argv;


//clima.getClima(34.610001, 58.369999)
//    .then(console.log)
//    .catch(console.log)

//lugar.getLugar(argv.direccion)
//    .then(console.log)
//    .catch(console.log)

const getInfo = async (direccion) => {

    try{
        const coord = await lugar.getLugar(direccion);
        const tem = await clima.getClima(coord.lat, coord.lon)
        return `La temperatura para ${coord.direccion} es de ${tem}`;

    }catch(e){
        return `No se pudo encontrar la temperatura para ${direccion} `;
    }


}

getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log)