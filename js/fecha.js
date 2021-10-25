const fecha = document.querySelector('#fecha');
const resultado = document.querySelector('#resultado');
const btnEnviar = document.querySelector('#btn-enviar');

function inicializarFunciones() {
    eventos();
}

inicializarFunciones();

function eventos() {
    btnEnviar.addEventListener('click', determinarNavidad);
}

function determinarNavidad(e) {
    e.preventDefault();
    const dividirFecha = fecha.value.split("");
    if (dividirFecha[5] == 1 && dividirFecha[6] == 2 && dividirFecha[8] == 2 && dividirFecha[9] == 5) {
        resultado.innerHTML = "Es navidad";
    } else {
        resultado.innerHTML = "No es navidad";
    }
}