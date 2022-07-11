
const archivos = require("./lecturaEscritura");
const arrayItems = archivos.leerJson("bicicletas");

const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A
const carrera = {
    // B
    bicicletas: arrayItems,
    // C
    bicicletasPorTanda: 4,
    // D
    listarBicicletas: function (array) {
    array.forEach(bici => {
            console.log(
                "Ciclista: " + bici.ciclista +
                ", marca: " + bici.marca +
                ", rodado: " + bici.rodado +
                ", peso: " + bici.peso + "kg" +
                ", largo: " + bici.largo + "cm" +
                ", estado: " + (bici.dopaje ? "Inhabilitado" : "Habilitado") +"\n"
            );
        });
    },
    // E
    ciclistasHabilitados:function () {
        return this.bicicletas.filter(bici => bici.dopaje === false);
    },
    // F
    buscarPorId:function (id) {
        return this.bicicletas.find(bici => bici.id === id);
    },
    // G
    filtrarPorPeso:function (peso) {
        const habilitados = this.ciclistasHabilitados();
        return habilitados.filter(bici => bici.peso <= peso);
    },
    // H
    ordenarPorRodado: function () {
        return this.bicicletas.sort((a,b) => a.rodado - b.rodado);
    },
    // I
    largoPromedio:function () {
        return this.bicicletas.reduce((acu,bici) => acu + bici.largo, 0) / this.bicicletas.length;
    },
    // J
    aumentarPeso: function (id,cantPeso) {
        const biciEncontrada = this.buscarPorId(id);
        biciEncontrada.peso += cantPeso;
        archivos.escribirJson("bicicletas", this.bicicletas)
        return biciEncontrada;
    },
    // K
    filtrarPorPesoII:function (peso) {
        return this.ciclistasHabilitados().filter(bici => bici.peso >= peso);
    },
    generarTanda:function (rodado, peso) {
        return this.filtrarPorPesoII(peso)
        .filter(bici => bici.rodado <=rodado)
        .slice(0, this.bicicletasPorTanda);
    },
    // L
    calcularPodio:function (array) {
        array.sort((a,b) => b.puntaje - a.puntaje).slice(0, 3);
            console.log(
                "✪ El ganador es: "+ array[0].ciclista + " con una puntuación de: "+ array[0].puntaje + "\n" +
                "★ El segundo puesto es: "+ array[1].ciclista +" con una puntuación de: "+ array[1].puntaje + "\n" +
                "✧ El tercer puesto es: "+ array[2].ciclista + " con una puntuación de: "+ array[2].puntaje+ "\n"
            );
    }
}

    /******************************/
    /* Ejecución de las consignas */
    /******************************/
    
    console.log(v, "\n" + oo + " .D. ");
// Ejecución aquí
console.log(o);
carrera.listarBicicletas(arrayItems);

console.log(v, oo + " .E.");
// Ejecución aquí
console.log(o);
carrera.listarBicicletas(carrera.ciclistasHabilitados());

console.log(v, oo + " .F.");
// Ejecución aquí
console.log(o);
carrera.listarBicicletas([carrera.buscarPorId(4)])
console.log(v, oo + " .G.");
// Ejecución aquí
console.log(o);
carrera.listarBicicletas(carrera.filtrarPorPeso(7))
console.log(v, oo + " .H.");
// Ejecución aquí
console.log(o);
carrera.listarBicicletas(carrera.ordenarPorRodado())
console.log(v, oo + " .I.");
// Ejecución aquí
console.log(o);
console.log(carrera.largoPromedio())
console.log(v, oo + " .J. ");
// Ejecución aquí
console.log(o);
// console.log([carrera.aumentarPeso(5,6.666)])
console.log(v, oo + " .K. ");
// Ejecución aquí
console.log(o);
carrera.listarBicicletas(carrera.generarTanda(30,5));
console.log(v, oo + " .L. ");
// Ejecución aquí
console.log(o);
carrera.calcularPodio(carrera.generarTanda(30,5));
