const archivos = require("./lecturaEscritura.js");
let arrayItems = archivos.leerJson("departamentos")


const inmobiliaria = {
    departamentos: arrayItems,
    
    listarDepartamentos: function (array) {
        array.forEach(departamento => {
            console.log(
                "Id: "+ departamento.id + 
                ", Precio: " + departamento.precioAlquiler+
                (departamento.disponible ? ", Disponible": ", Alquilado")+
                ", Ambientes: "+ departamento.ambientes+
                "\n"
                );
        });
    },
    buscarPorId: function (id) {
        return this.departamentos.find(dpto => dpto.id === id)
    },
    departamentosNoDisponibles:function () {
        return this.departamentos.filter(dpto => dpto.disponible === false);
    },
    departamentosDisponibles:function () {
        return this.departamentos.filter(dpto => dpto.disponible === true);
    },
    filtrarPorAmbientes:function (cant) {
        return this.departamentos.filter(dpto => dpto.ambientes >= cant);
    },
    filtrarPorPrecio:function (precio) {
        const disponible = this.departamentosDisponibles();
        return disponible.filter(dpto => dpto.precioAlquiler <= precio);
    },
    rejabarPrecioAlquiler:function (rebaja) {
        const disponible = this.departamentosDisponibles();
        disponible.forEach(dpto => dpto.precioAlquiler*=(1- rebaja / 100));
        archivos.escribirJson("departamentos", this.departamentos);
        return disponible;
    },
    calcularRecaudacion: function () {
        const noDisponibles = this.departamentosNoDisponibles();
        const total = noDisponibles.reduce((acumulador, dpto) => acumulador + dpto.precioAlquiler, 0);
        return total;
    },
    ordenarPorPrecio: function () {
        return this.departamentos.sort((a,b) => a.precioAlquiler - b.precioAlquiler)
    }
}



// inmobiliaria.listarDepartamentos(arrayItems);
// inmobiliaria.listarDepartamentos([inmobiliaria.buscarPorId(1)]);
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentosNoDisponibles());
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles());
// inmobiliaria.listarDepartamentos(inmobiliaria.filtrarPorAmbientes(2));
// inmobiliaria.listarDepartamentos(inmobiliaria.filtrarPorPrecio(30000));
// inmobiliaria.listarDepartamentos(inmobiliaria.rejabarPrecioAlquiler(1));
// console.log(inmobiliaria.calcularRecaudacion());
// inmobiliaria.listarDepartamentos(inmobiliaria.ordenarPorPrecio());
