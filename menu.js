const platoCentral = {
    "a) Lubina" : 15,
    "b) Chuleton" : 45,
    "c) Ensalada de la casa": 30,
    "d) Mariscada" : 50 
};

const complementos = {
    "a) Patatas Bravas" : 5,
    "b) Surtido Ibericos" : 12,
    "c) Sopa" : 7
};

const desayuno = {
    "a) cafe + bolleria" : 4,
    "b) cafe + pintxo" : 5,
    "c) huevos + bacon + chorizo" : 10
}; 

const comentarios = ["muy buena eleccion", "lo he probado y esta exquisito", "tienes buen ojo para la comida", "ummmm delicioso", "le va a encantar, luego me cuenta"];

alert("Bienvenid@s a nuestro fantástico restaurante");

let horario = prompt("¿Hola, en qué franja horaria estamos?\n a) De 7 a 12h \n b) De 13 a 17h \n c) De 20 a 00h \n(Elija solo la letra de la franja sin el paréntesis)").toLowerCase();

if (horario === "a"){
    const menuDesayuno = () => {
        let listaDesayuno = [];
        for (let des in desayuno) {
            let nombreDesayuno = des;
            let precioDesayuno = desayuno[des];
            listaDesayuno.push(`${nombreDesayuno} : ${precioDesayuno}€, \n`);
        }
        alert(`Genial! Veo que quieres desayunar. Aquí tienes nuestro fantástico desayuno:\n${listaDesayuno}`);
    };

    menuDesayuno();
    
    let eleccion = prompt("Elija lo que quiera de la carta");

    let peticionEspecial = prompt("¿Desea que hagamos su comida individualmente por algún tema de alergia o intolerancia? Tiene un sobrecoste de un 5% adicional (s/n)").toLowerCase();
    
    if (desayuno.hasOwnProperty(eleccion)){
        alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
    } else {
        alert("Elija correctamente el plato.");
    }

    precioDesayuno(eleccion, peticionEspecial);
}

if (horario === "b"){
    alert("¡Genial! Veo que quieres comer.");

    const menuCompletoComida = () => {
        let listaPlatoCentral = [];
        for (let central in platoCentral) {
            let nombrePlatoCentral = central;
            let precioPlatoCentral = platoCentral[central];
            listaPlatoCentral.push(`${nombrePlatoCentral} : ${precioPlatoCentral}€, \n`);
        }
        let listaComplementos = [];
        for (let complemento in complementos) {
            let nombreComplemento = complemento;
            let precioComplemento = complementos[complemento];
            listaComplementos.push(`${nombreComplemento} : ${precioComplemento}€, \n`);
        }
        alert(`Nuestro fantástico menú de comida es el siguiente:\nPlatos Centrales:\n${listaPlatoCentral}\nComplementos:\n${listaComplementos}`);
    };

    menuCompletoComida();

    let eleccionCentral = prompt("Elija primero un plato central").toLowerCase();
    let peticionEspecial = prompt("¿Desea que hagamos su comida individualmente por algún tema de alergia o intolerancia? Tiene un sobrecoste de un 5% adicional (s/n)").toLowerCase();

    alert(comentarios[Math.floor(Math.random() * comentarios.length)]);

    let preguntaComplemento = prompt("¿Quiere un complemento? (s/n)").toLowerCase();
    let eleccionComplemento;
    if (preguntaComplemento === "s") {
        eleccionComplemento = prompt("Elija un complemento").toLowerCase(); 
        alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
    }
    let preguntaComplementoDos = prompt ("¿Quiere otro complemento? (s/n)").toLowerCase();
    let eleccionComplementoDos;
    if (preguntaComplementoDos === "s") {
        eleccionComplementoDos = prompt("Elija otro complemento").toLowerCase(); 
        alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
    }
    precioComida(eleccionCentral, eleccionComplemento, eleccionComplementoDos, peticionEspecial);
}

if (horario === "c") {
    alert("¡Genial! Veo que quieres cenar.");

    const menuCompletoCena = () => {
        let listaPlatoCentral = [];
        for (let central in platoCentral) {
            let nombrePlatoCentral = central;
            let precioPlatoCentral = platoCentral[central] * 1.15; // Aumento del 15% para la cena
            listaPlatoCentral.push(`${nombrePlatoCentral} : ${precioPlatoCentral}€, \n`);
        }
        let listaComplementos = [];
        for (let complemento in complementos) {
            let nombreComplemento = complemento;
            let precioComplemento = complementos[complemento] * 1.15; // Aumento del 15% para la cena
            listaComplementos.push(`${nombreComplemento} : ${precioComplemento}€, \n`);
        }
        alert(`Nuestro fantástico menú de cena es el siguiente:\nPlatos Centrales:\n${listaPlatoCentral}\nComplementos:\n${listaComplementos}`);
    };

    menuCompletoCena();

    let eleccionCentral = prompt("Elija primero un plato central").toLowerCase();

    alert(comentarios[Math.floor(Math.random() * comentarios.length)]);

    let peticionEspecial = prompt("¿Desea que hagamos su comida individualmente por algún tema de alergia o intolerancia? Tiene un sobrecoste de un 5% adicional (s/n)").toLowerCase();

    let preguntaComplemento = prompt("¿Quiere un complemento? (s/n)").toLowerCase();
    let eleccionComplemento;
    if (preguntaComplemento === "s") {
        eleccionComplemento = prompt("Elija un complemento").toLowerCase(); 
        alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
    }
    let preguntaComplementoDos = prompt ("¿Quiere otro complemento? (s/n)").toLowerCase();
    let eleccionComplementoDos;
    if (preguntaComplementoDos === "s") {
        eleccionComplementoDos = prompt("Elija otro complemento").toLowerCase(); 
        alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
    }
    precioCena(eleccionCentral, peticionEspecial);
}

// Funciones de cálculo de precios

function precioDesayuno(eleccion, peticionEspecial) {
    if (desayuno.hasOwnProperty(eleccion)){
        let precio = desayuno[eleccion];
        let precioTotal = precio;
        if (peticionEspecial === "s") {
            precio *= 1.05; // Aumento del 5% por petición especial
            precioTotal *= 1.10; // Suma del 10% de IVA
        }
        alert(`El precio de tu desayuno es: ${precio}€. Sumando el IVA (10%) el total es: ${precioTotal.toFixed(2)}€`);
    } else {
        alert("No hay precio para ese plato.");
    }
}

function precioComida (eleccion, complementoUno, complementoDos, peticionEspecial) {
    let precio = platoCentral[eleccion] || 0;
    let precioTotal = precio;
    
    if (complementos.hasOwnProperty(complementoUno)) {
        precio += complementos[complementoUno];
    }
    
    if (complementos.hasOwnProperty(complementoDos)) {
        precio += complementos[complementoDos];
    }

    precioTotal += precio * 1.10; // Suma del 10% de IVA

    if (peticionEspecial === "s") {
        precioTotal *= 1.05; // Aumento del 5% por petición especial
    } 

    alert(`El precio de tu comida es: ${precio}€. Sumando el IVA (10%) el total es: ${precioTotal.toFixed(2)}€`);
}

function precioCena(eleccion, peticionEspecial) {
    let precio = platoCentral[eleccion] * 1.15; // Aumento del 15% para la cena
    let precioTotal = precio;
    
    if (peticionEspecial === "s") {
        precioTotal *= 1.05; // Aumento del 5% por petición especial
    } 

    precioTotal *= 1.10; // Suma del 10% de IVA
    precioTotal = Math.round(precioTotal * 100) / 100; // Redondeo del precio total a dos decimales

    alert(`El precio de tu cena es: ${precio.toFixed(2)}€. Sumando el IVA (10%) el total es: ${precioTotal.toFixed(2)}€`);
}
