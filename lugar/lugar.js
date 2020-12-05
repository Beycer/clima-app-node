const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);
    //console.log(encodedUlr);

    //Intancia de la petición
    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedUlr}&auth=40551348158085561472x70020?json=1`
        //headers: {'X-RapidAPI-Key': '2f1e9b8d6bmsh2f38abf69736226p15b59djsn5aec5c2ed7b1'}
    });

    //ejecutarla, trae la informacion y la almacena en respuesta
    const resp = await instance.get();

    //verificar si la respuesta tiene datos
    if(resp.data.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.standard.addresst;
    const direccion2 = data.standard.city
    const lat = data.latt;
    const lng = data.longt;

    return {//si yo lo dejo asi gracias al edmacript 6 entonces va a crearme una 
        //poriedad direccion con el valor que va tener la variable dirección
        direccion,
        direccion2,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}

/**
 * //ejecutarla
    instance.get()
            .then(resp => {
                console.log(resp.data);
            })
            .catch(err => {
                console.log("ERROR!!!!!", err);
            });
 */