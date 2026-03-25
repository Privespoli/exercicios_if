// edad
let edad = 7; 

if (edad >= 18) {
    console.log("Puedes votar");
} else {
    console.log("Aún eres muy joven");
}

// positivo y negativo
let number= 10; 

if (number > 0) {
    console.log("Es positivo");
} else if (number < 0) {
    console.log("Es negativo");
} else {
    console.log("El número es exactamente 0");
}

// aprobado o suspenso
let nota = 5; 

if (nota >= 5) {
    console.log("¡Felicidades, has aprobado!");
} else {
    console.log("Debes estudiar más para la próxima");
}

// par o impar
let numero = 15; 

if (numero % 2 === 0) {
    console.log("Es un número par");
} else {
    console.log("Es impar");
}

// dia da semana
let dia = "Lunes"; 
if (dia === "Sábado" || dia === "Domingo") {
    console.log("¡A disfrutar del descanso!");
} else {
    console.log("Toca seguir trabajando");
}

// botones
const select1 = document.getElementById('jugador1');
const select2 = document.getElementById('jugador2');
const boton = document.getElementById('btnJugar');
const textoResultado = document.getElementById('resultado');

const opciones = ["Piedra", "Papel", "Tijeras"];


opciones.forEach(opcion => {
    let el1 = document.createElement("option");
    let el2 = document.createElement("option");
    el1.textContent = el2.textContent = opcion;
    el1.value = el2.value = opcion.toLowerCase();
    select1.appendChild(el1);
    select2.appendChild(el2);
});


boton.addEventListener('click', () => {
    const eleccion1 = select1.value;
    const eleccion2 = select2.value;

    if (eleccion1 === eleccion2) {
        textoResultado.innerText = "¡Es un empate! 🤝";
    } 
    else if (
        (eleccion1 === "piedra" && eleccion2 === "tijeras") ||
        (eleccion1 === "papel" && eleccion2 === "piedra") ||
        (eleccion1 === "tijeras" && eleccion2 === "papel")
    ) {
        textoResultado.innerText = "¡Gana el Jugador 1! 🏆";
    } 
    else {
        textoResultado.innerText = "¡Gana el Jugador 2! 🏆";
    }
});