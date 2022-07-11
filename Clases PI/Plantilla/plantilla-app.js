const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Nicolas Gomez";
const tema = "Tema 1";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8,
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2,
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993,
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5,
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979,
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5,
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5,
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986,
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986,
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986,
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986,
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986,
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55,
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993,
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6,
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6,
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const inmobiliaria = {
  // A
  departamentos: departamentos,
  // B
  listarDepartamentos: function (array) {
    for (let i = 0; i < array.length; i++) {
      const dpto = array[i];
      console.log(
        "id:" +
          dpto.id +
          ", precio: $" +
          dpto.precioAlquiler +
          ", está " +
          (dpto.disponible ? "disponible" : "alquilado") +
          ", " +
          dpto.cantidadHabitacion +
          " ambientes, máximo " +
          dpto.cantidadPersonas +
          "personas, " +
          (dpto.aceptaMascotas ? "acepta mascotas" : "no mascotas") +
          ", propietarios:" +
          dpto.propietarios +
          "\n"
      );
    }
  },
  // C
  departamentosDisponibles: function () {
    const disponibles = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      const dpto = this.departamentos[i];
      if (dpto.disponible === true) {
        disponibles.push(dpto);
      }
    }
    return disponibles;
  },
  // D
  buscarPorld: function (id) {
    for (let i = 0; i < this.departamentos.length; i++) {
      const dpto = this.departamentos[i];
      if (dpto.id === id) {
        return dpto;
      }
    }
  },
  // E
  buscarPorPrecio: function (precio) {
    const disponiblesPorPrecio = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      const dpto = this.departamentos[i];
      if (dpto.precioAlquiler <= precio) {
        disponiblesPorPrecio.push(dpto)
      }
    }
    return disponiblesPorPrecio;
  },
  // F
  precioConImpuesto: function (porcentaje) {
    for (let i = 0; i < this.departamentos.length; i++) {
      const dpto = this.departamentos[i];
      const aumento = 1.0 + porcentaje / 100;
      dpto.precioAlquiler = dpto.precioAlquiler * aumento
    }
  },
  // G
  simplificarPropietarios: function () {
    for (let i = 0; i < this.departamentos.length; i++) {
      const dpto = this.departamentos[i];
      const inicio = dpto.propietarios.indexOf(":") + 1;
      const nombre = dpto.propietarios.slice(inicio);
      dpto.propietarios = " Prop.:" + nombre;
    }
    return this.departamentos;
  }
};
/******************************/
/* Ejecución de las consignas */
/******************************/

console.table([{ alumno: nombre, tema: tema }]);
//B
console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí
inmobiliaria.listarDepartamentos(departamentos);

console.log(o);
//C
console.log(v, oo + "   C. departamentosDisponibles");
// Ejecución aquí
const disponibles = inmobiliaria.departamentosDisponibles();
inmobiliaria.listarDepartamentos(disponibles);

console.log(o);

//D
console.log(v, oo + " D. buscarPorId");
// Ejecución aquí
const buscarDpto = inmobiliaria.buscarPorld(2);
inmobiliaria.listarDepartamentos([buscarDpto]);

console.log(o);
//E
console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
const disponiblesPorPrecio = inmobiliaria.buscarPorPrecio(665.5);
inmobiliaria.listarDepartamentos(disponiblesPorPrecio);

console.log(o);
//F
console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
const impuesto = inmobiliaria.precioConImpuesto(100);
inmobiliaria.listarDepartamentos(departamentos);

console.log(o);
//G
console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
const prop=inmobiliaria.simplificarPropietarios();
inmobiliaria.listarDepartamentos(prop)

console.log(o);
