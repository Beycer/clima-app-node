const axios = require('axios');//peticion a servicio rest por eso usamos axios

const getClima = async (lat, lng) => {
    //como es promesa yo puedo esperar a que se resuelva antes de hacer la siguiente 
    //instrucción del return 
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7e8191a6d015038e847b21e01dd12eca&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}