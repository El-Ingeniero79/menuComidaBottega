const platoCentral = {
    "Lubina" : 15,
    "Chuleton" : 45,
    "Ensalada de la casa": 30,
    "Mariscada" : 50 
};

const complementos = {
    "Patatas Bravas" : 5,
    "Surtido Ibericos" : 12,
    "Sopa" : 7
};

const desayuno = {
    "cafe + bolleria" : 4,
    "cafe + pintxo" : 5,
    "huevos + bacon + chorizo" : 10
}; 

function  menuCompletoComida(){
    for (let central in platoCentral) {
        let listaPlatoCentral;
        let nombrePlatoCentral = Object.keys(platoCentral[central])
        let precioPlatoCentral = Object.values(platoCentral[central]);
        listaPlatoCentral = listaPlatoCentral.push(`${nombrePlatoCentral} : ${precioPlatoCentral}€ \n`);
        
        return listaPlatoCentral;  
    }
    
    for (let complemento in complementos) {
        
        let listaComplementos = [];
        let nombreComplementos = objetc.keys(complementos[complemento])
        let precioComplementos = objetc.values(complementos[complemento]);
        listaComplementos = listaComplementos.push(`${nombreComplementos} : ${precioComplementos}€\n`)
        
        return listaComplementos;
        
    }
 alert (`nuestro fantastico menu de comida es el siguiente: ${listaPlatoCentral} y los siguientes complementos: ${listaComplementos}`)
};

function menuCompletoCena() {
    for (let central in platoCentral) {

        let listaPlatoCentral = [];
        let nombrePlatoCentral = platoCentral[central];
        let precioPlatoCentral = parseInt(platoCentral[nombrePlatoCentral])*1.15;
        listaPlatoCentral.push(`${nombrePlatoCentral} : ${precioPlatoCentral}€ \n`).toString();
        return listaPlatoCentral;  
    }
    
    for (let complemento in complementos) {
        
        let listaComplementos = [];
        let nombreComplemento = complementos[central];
        let precioComplemento = parseInt(complementos[nombrePlatoCentral])*1.15;
        listaComplementos.push(`${nombreComplemento} : ${precioComplemento}€ \n`).toString();
        
        return listaEntrantes;
        
    }
 alert (`nuestro fantastico menu de cena es el siguiente:${listaPlatoCentral} y los siguientes complementos: ${listaComplementos}`)
};

function menuDesayuno(){
    for (let des in desayuno) {
        
        let listaDesayuno = [];
        let nombreDesayuno = desayuno[des];
        let precioDesayuno = desayuno[nombreDesayuno];
        listaDesayuno.push(`${nombreDesayuno} : ${precioDesayuno} \n`);
         
    };
    alert(`nuestro fantastico desayuno es el siguiente: ${listaDesayuno},`); 
}


const comentarios = ["muy buena eleccion", "lo he probado y esta exquisito", "tienes buen ojo para la comida", "ummmm delicioso", "le va a encantar, luego me cuenta"];



function precioDesayuno(eleccion, peticionEspecial) {
    for (des in desayuno) {
        let precio;
        let precioTotal;
        if (eleccion === Object.keys(desayuno)){
            precio = parseInt(Object.values(desayuno.eleccion));
            precioTotal = precio * 1,10;

            
            if (peticionEspecial === "s") {
                precio *= 1.05;
                precioTotal *= precio *1.10;
            }
        alert ("el precio de tu desayuno es: ${precio} € sumando el IVA (10%) el total es :${precioTotal}");
        } else ("no hay precio para ese plato");
    }
}

function precioComida (eleccion, complementoUno, complementoDos, peticionEspecial) {
    let precio;
    let precioTotal;
        
    
    for (plato in platoCentral ) {
        
        if (eleccion === Object.keys(platoCentral)) {
            precio += parseInt(Object.values(platoCentral.eleccion));
            precioTotal += precio * 1,10
            
        }
    }
    for (comp in complementos ) {
        
        if (eleccion === Object.keys(complementos)) {
            precio += parseInt(Object.values(complementos.eleccion));
            precioTotal += precio * 1,10
            
        };
    }
    if (peticionEspecial === "s") {
        precio *= 1.05
        precioTotal *= precio *1.10
    } 
        alert ("el precio de tu desayuno es: ${precio} € sumando el IVA (10%) el total es :${precioTotal}")
    
}


function precioCena(eleccion, peticionEspecial) {

    let precio;
    let precioTotal;
        
    
    for (plato in platoCentral ) {
        
        if (eleccion === Object.keys(platoCentral)) {
            precio += parseInt(Object.values(platoCentral.eleccion))*1.15;
            precioTotal += precio * 1,10;
            
        }
    }
    for (comp in complementos ) {
        
        if (eleccion === Object.keys(complementos)) {
            precio += parseInt(Object.values(complementos.eleccion))*1.15;
            precioTotal += precio * 1,10
            
        };
        if (peticionEspecial === "s") {
            precio *= 1.05;
            precioTotal *= precio *1.10;
        } 
    }
        alert (`el precio de tu desayuno es: ${precio} € sumando el IVA (10%) el total es :${precioTotal}`)
    
}
alert ("Bienvenid@s a nuestro fantastico restaurante");

let horario = prompt("¿hola podria decirnos en que franja horaria estamos?:\n a) de 7 a 12h \n b) de 13 a 17h \n c) de 20 a 00h \n (elija solo la letra de la franja sin el parentesis)").toLowerCase

if (horario === "a") {

    alert("Genial, veo que quieres desayunar. ${menuDesayuno}");
    let eleccion = prompt("elija lo que quiera de la carta")

   peticionEspecial = prompt("¿desea que hagamos su comida individualmente por algun tema de alergia o intolerancia? tiene un sobrecoste de un 5% adicional (s/n)").toLowerCase;
    
    for (des in desayuno){
        
        if (eleccion === Object.keys(desayuno)){
            alert(Math.round(Math.random() * comentarios.length));
            
        }
        else ("elija correctamente el plato");

    };
    peticionEspecial = prompt("¿desea que hagamos su comida individualmente por algun tema de alergia o intolerancia? tiene un sobrecoste de un 5% adicional (s/n)").toLowerCase;
    precioDesayuno(eleccion, peticionEspecial)

}
if (horario === "b") {
    alert("¡¡¡Genial!!!, veo que quieres comer. ${menuCompletoCommida}");

    let eleccionCentral = prompt("elija primero un plato central").toLowerCase;
    peticionEspecial = prompt("¿desea que hagamos su comida individualmente por algun tema de alergia o intolerancia? tiene un sobrecoste de un 5% adicional (s/n)").toLowerCase;

    alert(Math.round(Math.random() * comentarios.length));

    let preguntaComplemento = prompt("¿quieres un complemento? (s/n)").toLowerCase;
    if (preguntaComplemento = "s") {
        let eleccionComplemento = prompt("elije un complemento").toLowerCase; 
        alert(Math.round(Math.random() * comentarios.length));
    }
    let preguntaComplementoDos = prompt ("¿quieres otro complemento? (s/n)").toLowerCase;
    if (preguntaComplemento = "s") {
        let eleccionComplementoDos = prompt("elije otro complemento").toLowerCase; 
        alert(Math.round(Math.random() * comentarios.length));
    }
    precioComida(eleccionCentral, eleccionComplemento, eleccionComplementoDos, peticionEspecial);
}

if (horario === "c") {
    alert("¡¡¡Genial!!!, veo que quieres cenar. ${menuCompletoCena}");

    let eleccionCentral = prompt("elija primero un plato central").toLowerCase;

    alert(Math.round(Math.random() * comentarios.length));

    peticionEspecial = prompt("¿desea que hagamos su comida individualmente por algun tema de alergia o intolerancia? tiene un sobrecoste de un 5% adicional (s/n)").toLowerCase;

    let preguntaComplemento = prompt("¿quieres un complemento? (s/n)").toLowerCase;

    if (preguntaComplemento = "s") {

        let eleccionComplemento = prompt("elije un complemento").toLowerCase; 
        alert(Math.round(Math.random() * comentarios.length));
    }
    let preguntaComplementoDos = prompt ("¿quieres otro complemento? (s/n)").toLowerCase;

    if (preguntaComplemento = "s") {

        let eleccionComplementoDos = prompt("elije otro complemento").toLowerCase; 
        alert(Math.round(Math.random() * comentarios.length));
    }
   precioCena(eleccion, peticionEspecial) ;
}
