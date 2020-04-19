const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de una tarea'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('borrar', 'Borra una tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}