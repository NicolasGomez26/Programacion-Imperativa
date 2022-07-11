const archivos =require("./lecturaEscritura.js");
let arrayItems = archivos.leerJson("autos");


const carrera = {
    autos: arrayItems,
    autosPorTanda: 6,
    autosHabilitados: function () {
        return this.autos.filter(auto => auto.sancionado === false);
    },
    listarAutos: function (array) {
        array.forEach(auto => {
            console.log(
                "Piloto: "+ auto.piloto + 
                ", Patente: " + auto.patente +
                ", velocidad: "+ auto.velocidad +
                ", peso: "+ auto.peso +
                ", Estado: "+ (auto.sancionado ? "Sancionado" : "Habilitado")+"\n"
                
            );
        });
    },
    buscarPorPatente: function (patente) {
        return this.autos.find(auto => auto.patente === patente);
    },
    filtrarPorCilindrada: function (cil) {
        const habilitados = this.autosHabilitados();
        return habilitados.filter(auto => auto.cilindrada <= cil);
    },
    ordenarPorVelocidad: function () {
        return this.autos.sort((a,b) => a.velocidad - b.velocidad);
    },
    habilitarVehiculo: function (patente) {
        const autoEncontrado = this.buscarPorPatente(patente);
        autoEncontrado.sancionado= false;
        archivos.escribirJson("autos", this.autos);
        return autoEncontrado;
    },

    generarTanda: function (cilindrada, peso) {
        return this.filtrarPorCilindrada(cilindrada)
        .filter((auto) => auto.peso <= peso)
        .slice(0, this.autosPorTanda);
    },
    pesoPromedio:function (cil, peso) {
        const tanda = this.generarTanda(cil,peso)
        return tanda.reduce((acu,auto) => acu + auto.peso, 0) / tanda.length;
    },
    listarPodio:function (array) {
        array.sort((a,b) => a.puntaje - b.puntaje)
        console.log(
            "✪ El ganador es: "+ array[1].piloto + " con una puntuación de: "+ array[1].puntaje + "\n"+
            "★ El segundo puesto es: "+ array[2].piloto +" con una puntuación de: "+ array[2].puntaje +"\n"+
            "✧ El tercer puesto es: "+ array[3].piloto + " con una puntuación de: "+ array[3].puntaje+"\n"
        );
    },
}


// console.log(carrera.autosHabilitados());
// carrera.listarAutos(arrayItems);
// carrera.listarAutos([carrera.buscarPorPatente("ABC123")]);
// carrera.listarAutos(carrera.filtrarPorCilindrada(3000));
// carrera.listarAutos(carrera.ordenarPorVelocidad());
// console.log(carrera.habilitarVehiculo("JHV223"));
// carrera.listarAutos(carrera.generarTanda(3000,2000));
// console.log(carrera.pesoPromedio(3000,2000));
// carrera.listarPodio(carrera.generarTanda(3000,2000))