const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'nombre_usuario',
    password: 'contraseña',
    database: 'mibd'
});

conexion.connect();

function obtenerUsuarioPorId(id, callback) {
  conexion.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, resultados) => {
    if (error) throw error;
    callback(resultados[0]);
});
}

module.exports = {
obtenerUsuarioPorId
};