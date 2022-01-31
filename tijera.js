let puntaje_usuario = 0;
let puntaje_cpu = 0;
const puntajeUsuario_span = document.getElementById("puntaje-usuario");
const puntajeCPU_span = document.getElementById("puntaje-cpu");
const resultado = document.querySelector(".resultado > p");
const mensaje = document.querySelector(".mensaje > p");
const piedra = document.getElementById("pi");
const papel = document.getElementById("pa");
const tijera = document.getElementById("ti");

function opcionDelCpu()
{
    const opciones = ["pi", "pa", "ti"];
    const numeroRandom = Math.floor(Math.random() * 3);
    return opciones[numeroRandom];
}

function convertir(letras)
{
    switch (letras)
    {
        case "pi":
            return "Piedra";
        case "pa":
            return "Papel";
        case "ti":
            return "Tijera";
    }
}

function ganar(opcionUsuario, opcionCPU)
{
    const palabraUsuario = "(Usuario)".fontsize(3).sub();
    const palabraCPU = "(CPU)".fontsize(3).sub();
    const opcionUsuario_div = document.getElementById(opcionUsuario);
    puntaje_usuario++;
    puntajeUsuario_span.innerHTML = puntaje_usuario;
    puntajeCPU_span.innerHTML = puntaje_cpu;
    resultado.innerHTML = `${convertir(opcionUsuario)}${palabraUsuario} vence a ${convertir(opcionCPU)}${palabraCPU}. Tu Ganas!!`;
    mensaje.innerHTML = `Buen Movimiento!!`;
    opcionUsuario_div.classList.add("brillo-verde");
    setTimeout(() => opcionUsuario_div.classList.remove("brillo-verde"), 1000);
}

function perder(opcionUsuario, opcionCPU)
{
    const palabraUsuario = "(Usuario)".fontsize(3).sub();
    const palabraCPU = "(CPU)".fontsize(3).sub();
    const opcionUsuario_div = document.getElementById(opcionUsuario);
    puntaje_cpu++;
    puntajeUsuario_span.innerHTML = puntaje_usuario;
    puntajeCPU_span.innerHTML = puntaje_cpu;
    resultado.innerHTML = `${convertir(opcionCPU)}${palabraCPU} vence a ${convertir(opcionUsuario)}${palabraUsuario}. Tu Pierdes!!`;
    mensaje.innerHTML = `Mala Suerte!!`;
    opcionUsuario_div.classList.add("brillo-rojo");
    setTimeout(() => opcionUsuario_div.classList.remove("brillo-rojo"), 1000);
}

function empate(opcionUsuario, opcionCPU)
{
    const palabraUsuario = "(Usuario)".fontsize(3).sub();
    const palabraCPU = "(CPU)".fontsize(3).sub();
    const opcionUsuario_div = document.getElementById(opcionUsuario);
    resultado.innerHTML = `${convertir(opcionUsuario)}${palabraUsuario} y ${convertir(opcionCPU)}${palabraCPU}. Empate!!`;
    mensaje.innerHTML = `Uff!! Otra vez!`;
    opcionUsuario_div.classList.add("brillo-amarillo");
    setTimeout(() => opcionUsuario_div.classList.remove("brillo-amarillo"), 1000);
}

function juego(opcionUsuario)
{
    const opcionCPU = opcionDelCpu();
    switch (opcionUsuario + opcionCPU)
    {
        case "papi":
        case "tipa":
        case "piti":
            ganar(opcionUsuario, opcionCPU);
            break;
        case "pipa":
        case "pati":
        case "tipi":
            perder(opcionUsuario, opcionCPU);
            break;
        case "pipi":
        case "papa":
        case "titi":
            empate(opcionUsuario, opcionCPU);
            break;
    }
}

function evento()
{
    piedra.addEventListener("click", () => juego("pi"));
    papel.addEventListener("click", () => juego("pa"));
    tijera.addEventListener("click", () => juego("ti"));
}
evento();