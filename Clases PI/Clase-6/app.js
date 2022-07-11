const archivos = require("./lecturaEscritura");
let arrayDepartamentos = archivos.leerJson("departamentos");

const inmobiliaria = {
    departamentos: arrayDepartamentos,

    listarDepartamentos:function (array = this.departamento) {
        array.forEach(departamento => {
            console.log(
                "ID: " + departamento.id + 
                ", precio: " + departamento.precioAlquiler + 
                (departamento.disponible ? ", Esta Disponible, " : ", No Disponible, ") +
                departamento.ambientes + " ambiente/s."
            )
        });
    },
    departamentosDisponibles: function (bool) {
        return this.departamentos.filter(departamento => departamento.disponible === bool)
    },
    rebajarPrecioAlquiler: function (porcentaje) {
        const deptosDisponibles = this.departamentosDisponibles();
        deptosDisponibles.forEach(departamento => departamento.precioAlquiler = departamento.precioAlquiler * (1 - porcentaje / 100));
        archivos.escribirJson('departamentos', this.departamentos);
        return this.departamentos;
    },
}


//inmobiliaria.listarDepartamentos(inmobiliaria.departamentos)
//const disponible = inmobiliaria.departamentosDisponibles(true);
//inmobiliaria.listarDepartamentos(disponible);
//inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles(true));
console.log(inmobiliaria.rebajarPrecioAlquiler(50));