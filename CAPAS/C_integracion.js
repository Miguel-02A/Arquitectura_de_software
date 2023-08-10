const axios = require('axios');

async function obtenerDatosUsuario(idUsuario) {
    try {
    const respuesta = await axios.get(`https://api.ejemplo.com/usuarios/${idUsuario}`);
    return respuesta.data;
} catch (error) {
    console.error('Error al obtener datos del usuario:', error.message);
    return null;
}
}

module.exports = {
    obtenerDatosUsuario
};