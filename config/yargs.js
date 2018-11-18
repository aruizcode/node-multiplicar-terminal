const opts = {
  base : {
    demand : true,
    alias : 'b'
  },
  limite : {
    alias : 'l',
    default :10
  }
}
const argv = require('yargs')
          .command('listar' , 'imprime en consola la tabla de multiplicar', opts)
          .command('crear' , 'guarda en fichero la tabla de multiplicar',opts)
          .help()
          .argv;
module.exports = {
  argv
}
