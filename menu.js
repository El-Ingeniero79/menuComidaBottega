// variables de mis menus
let menus = {
    "a": {
        franjaHoraria: "Desayuno (7h - 12h)",
        primerPlato: ["Tortilla de patata", "Huevos revueltos", "Huevos con chistorra"],
        segundoPlato: ["Fruta", "Donuts", "Napolitanas de chocolate"],
        bebidas: ["Café", "Zumo de naranja", "Té"],
        precios: [5, 4, 6, 3, 4, 5, 2, 3, 2]
    },
    "b": {
        franjaHoraria: "Comida (13h - 17h)",
        primerPlato: ["Sopa de Pescado", "Alubias con sacramentos", "Ensalada César"],
        segundoPlato: ["Cordero asado", "Pollo a la parrilla", "Pescado al horno"],
        bebidas: ["Refresco", "Vino", "Agua"],
        precios: [10, 8, 6, 18, 15, 22, 3, 4, 1]
    },
    "c": {
        franjaHoraria: "Cena (20h - 00h)",
        primerPlato: ["Sopa de Pescado", "Alubias con sacramentos", "Ensalada César"],
        segundoPlato: ["Cordero asado", "Pollo a la parrilla", "Pescado al horno"],
        bebidas: ["Refresco", "Vino", "Agua"],
        precios: [13, 11, 9, 21, 18, 25, 4, 5, 2]
    }
};

// mi Función para imprimir el menú de selección y que quede legible
function imprimirMenuSeleccion(menu, tipoPlato) {
    let menuString = `Menú ${menu.franjaHoraria}\n\n${tipoPlato}:\n\n`;
    menu[tipoPlato].forEach((plato, index) => {
        menuString += `${index + 1}. ${plato} - ${menu.precios[(tipoPlato === "primerPlato" ? index : (tipoPlato === "segundoPlato" ? index + 3 : index + 6))]}€\n`;
    });
    return menuString;
}

// mi Función para seleccionar un plato despues de la interaccion del usuario
function seleccionarPlato(menu, tipoPlato, index) {
    return {
        plato: menu[tipoPlato][index],
        precio: menu.precios[index + (tipoPlato === "primerPlato" ? 0 : (tipoPlato === "segundoPlato" ? 3 : 6))]
    };
}

// Función para obtener un comentario ingenioso aleatorio
function comentarioIngenioso() {
    const comentarios = [
        "¡Excelente elección!",
        "¡Esa es una de nuestras especialidades!",
        "¡Vas a disfrutarlo mucho!",
        "¡Buen gusto!",
        "¡Una opción clásica!"
    ];
    return comentarios[Math.floor(Math.random() * comentarios.length)];
}

// Función para calcular el precio total, la factura y resumen de la comida
function calcularPrecioTotal(primerPlatoIndex, segundoPlatoIndex, bebidaIndex, franjaHoraria) {
    let menu = menus[franjaHoraria];
    let primerPlato = seleccionarPlato(menu, "primerPlato", primerPlatoIndex - 1);
    let segundoPlato = seleccionarPlato(menu, "segundoPlato", segundoPlatoIndex - 1);
    let bebida = seleccionarPlato(menu, "bebidas", bebidaIndex - 1);
    let precioTotal = primerPlato.precio + segundoPlato.precio + bebida.precio;
    let mensaje = `Aqui tienes el resumen de la comida y la factura de tu fantastico menu\n\n`;
    mensaje += `Primer Plato: ${primerPlato.plato} -> ${primerPlato.precio}€\n`;
    mensaje += `Segundo Plato: ${segundoPlato.plato} -> ${segundoPlato.precio}€\n`;
    mensaje += `Bebida: ${bebida.plato} -> ${bebida.precio}€\n`;
    mensaje += `------------------------------------------------\n`;
    mensaje += `Precio Total (10% IVA incluido): ${precioTotal.toFixed(2)}€\n`;
    mensaje += `------------------------------------------------\n`;
    mensaje += `¡¡¡Esperamos que vuelvas pronto!!!`;
    alert(mensaje);
}

// Función para pedir la franja horaria al usuario con gestion del error y explicacion de como seleccionar
function pedirFranjaHoraria() {
    let franja;
    do {
        franja = prompt("¿En qué franja horaria te encuentras?\n (las opciones se eligen con a , b ó c sin parentesis)\n(a) 7 a 12h (Desayuno)\n(b) 13 a 17h (Comida)\n(c) 20 a 00h (Cena)").toLowerCase();
        if (franja !== "a" && franja !== "b" && franja !== "c") {
            alert("No te despistes has Seleccionado una opcion incorrecta. Por favor, elige un número válido.")
        };
    } while (!menus[franja]);
    return franja;
}

// Función para validar la selección del plato
function validarSeleccionPlato(menu, tipoPlato, index) {
    return index >= 1 && index <= menu[tipoPlato].length;
}

// Orden de ejecución del código para visionado correcto del ususario
alert("¡Bienvenido a nuestro fantástico restaurante!");
alert("Queremos darle un buen servicio, por lo tanto le solicitaremos en que horario vas a comer, para que no haya confusiones con los menus. Tambien podra consultar nuestros platos y precios para no llevarse sorpresas negativas. Le recordamos que todos nuestros precios llevan el IVA incluido. En caso de tener alguna duda esctribanos a: \n elMejor_RestauranteMundial@comebien.com ");
let franjaHoraria = pedirFranjaHoraria();
let primerPlatoIndex, segundoPlatoIndex, bebidaIndex;

do {
    primerPlatoIndex = parseInt(prompt(`Selecciona un primer plato (indica el número):\n\n${imprimirMenuSeleccion(menus[franjaHoraria], "primerPlato")}`));
    if (!validarSeleccionPlato(menus[franjaHoraria], "primerPlato", primerPlatoIndex)) {
        alert("No te despistes has Seleccionado una opcion incorrecta. Por favor, elige un número válido.");
    }
} while (!validarSeleccionPlato(menus[franjaHoraria], "primerPlato", primerPlatoIndex));
alert(comentarioIngenioso());
do {
    segundoPlatoIndex = parseInt(prompt(`Selecciona un segundo plato (indica el número):\n\n${imprimirMenuSeleccion(menus[franjaHoraria], "segundoPlato")}`));
    if (!validarSeleccionPlato(menus[franjaHoraria], "segundoPlato", segundoPlatoIndex)) {
        alert("No te despistes has Seleccionado una opcion incorrecta. Por favor, elige un número válido.");
    }
} while (!validarSeleccionPlato(menus[franjaHoraria], "segundoPlato", segundoPlatoIndex));
alert(comentarioIngenioso());
do {
    bebidaIndex = parseInt(prompt(`Selecciona una bebida (indica el número):\n\n${imprimirMenuSeleccion(menus[franjaHoraria], "bebidas")}`));
    if (!validarSeleccionPlato(menus[franjaHoraria], "bebidas", bebidaIndex)) {
        alert("No te despistes has Seleccionado una opcion incorrecta. Por favor, elige un número válido.");
    }
} while (!validarSeleccionPlato(menus[franjaHoraria], "bebidas", bebidaIndex));
calcularPrecioTotal(primerPlatoIndex, segundoPlatoIndex, bebidaIndex, franjaHoraria);
