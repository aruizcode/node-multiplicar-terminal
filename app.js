'use strict';
const argv = require('./config/yargs').argv;
const  { tablaMultiplicar , listarTabla}  = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
  case 'listar':
      listarTabla(argv.base , argv.limite);
    break;
  case 'crear':
    tablaMultiplicar(argv.base ,argv.limite)
      .then(archivo => console.log(`archivo creado ${archivo}`))
      .catch(err => console.log(err));
      break;
  default: console.log('comando no reconocido');
}

/*
let argv2 = process.argv;

console.log(argv.limite);
//let parametro = argv[2];
//let numero =  parametro.split('=')[1];

//let numero = 'a';
/*
*/
