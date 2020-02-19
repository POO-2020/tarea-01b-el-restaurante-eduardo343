
class pedido { 
    /**
     * 
     * @param {*} fecha
     * @param {*} hora
     * @param {*} cliente
     * @param {*} elementospedidos
     * 
     */
    constructor( fecha, hora, elementospedidos, cliente = new Date(0000, 0, 0)) {
        console.log("se ha iniciado los procesos!");
        this.fecha = fecha;
        this.cliente = numeroCuenta;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaRegistro = new Date();
    }
    
    decirfecha() {
        console.log("Hola, hoy estamos " + this.fecha + ", tengas un dia lindo");
    
        console.log(`Hola hoy estamos ${this.fecha}, tengas un dia lindo!`);
    }

    decirhora() {
        console.log(`Hasta luego! ${this.hora} se ha retirado`);
    }

    listarPerfil() {
        console.log(`fecha ${this.fecha}`);
        console.log(`Número de cuenta ${this.numeroCuenta}`);
        console.log(`Fecha de nacimiento ${this.fechaNacimiento}`);
        console.log(`Fecha de registro: ${this.fechaRegistro}`);
    }
}

let alumno1 = new Alumno("Juan", 20114658, new Date(1996, 1, 28));
let alumno2 = new Alumno("Pedro", 20114345, new Date(1996, 9, 27));

alumno1.decirHola();
alumno2.decirHola();

alumno1.decirAdios();
alumno2.decirAdios();

alumno1.listarPerfil();
alumno2.listarPerfil();

let alumno3 = new Alumno("Maria", 20105566);
alumno3.listarPerfil();