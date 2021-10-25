const estudiante = document.querySelector('#estudiante');
const nota = document.querySelector('#nota');
const resultado = document.querySelector('#resultado');
const btnEnviar = document.querySelector('#btn-enviar');

function inicializarFunciones() {
    eventos();
}

inicializarFunciones();

function eventos() {
    btnEnviar.addEventListener('click', determinarNota);
}

function determinarNota(e) {
    e.preventDefault();
    if (nota.value >= 0 && nota.value <= 10) {
        if (!isNaN(nota.value)) {
            if (nota.value <= 7 && nota.value >= 5) {
                resultado.innerHTML = `El alumno ${estudiante.value} ha aprobado con un bien`;
            } else if (nota.value >= 7) {
                resultado.innerHTML = `El alumno ${estudiante.value} ha aprobado con un my bien`;
            } else if(nota.value < 5) {
                resultado.innerHTML = `El alumno ${estudiante.value} ha suspendido`;
            }
        } else {
            resultado.innerHTML = "Por favor digite un numero entre 0 u 10";
        }
    } else {
        resultado.innerHTML = "Por favor digite una nota válida, entre 0 u 10";
    }
}