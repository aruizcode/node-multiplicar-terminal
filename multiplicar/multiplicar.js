'use strict';
const fs = require('fs');
let listarTabla = (base , limite=10) => {
  for (let i = 1 ; i <= limite ; i++ ){
    let resultado = base * i;
    console.log(`${ base } * ${i} = ${resultado}\n`);
    }
  }


let tablaMultiplicar = (base, limite = 10) => {

  return new Promise((resolve, reject ) =>{

    if (!Number(base) && !Number(limite)) {
      reject(`cuidado! el resultado ${ base } y ${limite} NO es un numero`);
      return;
    }
    let result = '';
    for (let i = 1 ; i <= limite ; i++ ){
      let resultado = base * i;
      result += `${ base } * ${i} = ${resultado}\n `;
    }
    const data = new Uint8Array(Buffer.from(result));
    fs.writeFile(`./tablas/tabla-${ base }.txt`, data, (err) => {
      if (err)
        return reject(err);
      else
        return resolve (`tabla-${base}.txt`);
    });
  });
}
module.exports = {
  tablaMultiplicar,
  listarTabla
}
