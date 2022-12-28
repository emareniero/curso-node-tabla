const fs = require('fs');
//const colors = require('colors');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';
        let consola = '';

        for(let i=1; i <= hasta ; i++){
            salida += `${base} x ${i} = ${base * i}\n`; // el \ es para producri un salto de linea en el resultado de la consola
            consola += `${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i}\n`;
        }

        if (listar) {
            console.log('---------------------------------------'.rainbow)
            console.log('            Tabla del:'.america, colors.yellow(base) )
            console.log('---------------------------------------'.rainbow)
            console.log(consola);
        }

        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)

        return `Tabla-${base}.txt`;

    } catch (err) {
        throw console.log(err);
    }

}

module.exports = {
    crearArchivo // asi se exportan archivos en Node.js
}