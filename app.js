const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//yargs ofrece una opcion que me permite poner comandos directamente
//o configurar argumentos directamente en la raiz de la aplicación o del comando
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv; //=> obtener los argumentos

//console.log(argv.direccion);
/*
lugar.getLugarLatLng(argv.direccion)
    .then(console.log);*/

    /*clima.getClima(20.61168, -100.40885)
        .then(console.log)
        .catch(console.log);*/

const getInfo = async(direccion) => {

    try {
        //como es un await el resultado de todas mi promesa esta alcemnadas en coords
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion2} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);