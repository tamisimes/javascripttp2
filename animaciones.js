
function saludar() {
    let nombre = prompt("¡Bienvenido!, Ingresa tu nombre")
    
    while (nombre === '' || /^[0-9]+$/.test(nombre) || nombre.trim() === '') {
        alert("Hola, digita bien tu nombre")
        nombre = prompt("¡Bienvenido!, Ingresa tu nombre")
    }

    alert("¡Hola " + nombre + "! Gracias por contactarte con nosotros")
}
saludar ()

let diaDeNacimientoDelUsuario = parseInt(prompt("¿Qué día naciste?"))
let mesDeNacimientoDelUsuario = parseInt(prompt("¿En qué mes naciste? (Indicanos el número del 1 al 12)"))


const signosDelZodiaco = [
    { Signos: ["Cáncer", "Escorpio", "Piscis"], Elemento: "agua" },
    { Signos: ["Géminis", "Libra", "Acuario"], Elemento: "aire" },
    { Signos: ["Aries", "Leo", "Sagitario"], Elemento: "fuego" },
    { Signos: ["Tauro", "Virgo", "Capricornio"], Elemento: "tierra" },
]
if ((mesDeNacimientoDelUsuario === 3 && diaDeNacimientoDelUsuario >= 21) || (mesDeNacimientoDelUsuario === 4 && diaDeNacimientoDelUsuario <= 19)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Aries"));

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Aries y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de fuego: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}

if ((mesDeNacimientoDelUsuario === 4 && diaDeNacimientoDelUsuario >= 20) || (mesDeNacimientoDelUsuario === 5 && diaDeNacimientoDelUsuario <= 20)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Tauro"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Tauro y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de tierra: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}

if ((mesDeNacimientoDelUsuario === 5 && diaDeNacimientoDelUsuario >= 21) || (mesDeNacimientoDelUsuario === 6 && diaDeNacimientoDelUsuario <= 20)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Géminis"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Géminis y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de aire: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}

if ((mesDeNacimientoDelUsuario === 6 && diaDeNacimientoDelUsuario >= 21) || (mesDeNacimientoDelUsuario === 7 && diaDeNacimientoDelUsuario <= 22)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Cáncer"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Cáncer y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de agua: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}
if ((mesDeNacimientoDelUsuario === 7 && diaDeNacimientoDelUsuario >= 23) || (mesDeNacimientoDelUsuario === 8 && diaDeNacimientoDelUsuario <= 22)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Leo"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Leo y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de fuego: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}

if ((mesDeNacimientoDelUsuario === 8 && diaDeNacimientoDelUsuario >= 23) || (mesDeNacimientoDelUsuario === 9 && diaDeNacimientoDelUsuario <= 22)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Virgo"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Virgo y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de tierra: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}

if ((mesDeNacimientoDelUsuario === 9 && diaDeNacimientoDelUsuario >= 23) || (mesDeNacimientoDelUsuario === 10 && diaDeNacimientoDelUsuario <= 22)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Libra"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Libra y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de aire: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}

if ((mesDeNacimientoDelUsuario === 10 && diaDeNacimientoDelUsuario >= 23) || (mesDeNacimientoDelUsuario === 11 && diaDeNacimientoDelUsuario <= 21)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Escorpio"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Escorpio y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de agua: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}

if ((mesDeNacimientoDelUsuario === 11 && diaDeNacimientoDelUsuario >= 22) || (mesDeNacimientoDelUsuario === 12 && diaDeNacimientoDelUsuario <= 21)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Sagitario"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Sagitario y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de fuego: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}

if ((mesDeNacimientoDelUsuario === 12 && diaDeNacimientoDelUsuario >= 22) || (mesDeNacimientoDelUsuario === 1 && diaDeNacimientoDelUsuario <= 19)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Capricornio"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Capricornio y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de tierra: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}

if ((mesDeNacimientoDelUsuario === 1 && diaDeNacimientoDelUsuario >= 20) || (mesDeNacimientoDelUsuario === 2 && diaDeNacimientoDelUsuario <= 18)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Acuario"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Acuario y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de aire: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}

if ((mesDeNacimientoDelUsuario === 2 && diaDeNacimientoDelUsuario >= 19) || (mesDeNacimientoDelUsuario === 3 && diaDeNacimientoDelUsuario <= 20)) {
    const signoDelUsuarioEncontrado = signosDelZodiaco.find(signo => signo.Signos.includes("Piscis"))

    if (signoDelUsuarioEncontrado) {
        alert(`Tu signo es Piscis y es de elemento ${signoDelUsuarioEncontrado.Elemento}. Estos son todos los signos de agua: ${signoDelUsuarioEncontrado.Signos.join(", ")}`)
    } else {
        alert("No podemos encontrar tus características.")
    }
}


const signosDelZodiacoSinElementos = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"]
alert("Te mostramos para que veas todos los signos del zodiaco: " + signosDelZodiacoSinElementos)

const nuevoSigno = "Ofiuco"

const signosDelZodiacoSinElementosConOfiuco = [...signosDelZodiacoSinElementos, nuevoSigno]

alert("Aunque en realidad dicen que son 13, ¿Te animas a encontrar el nuevo signo? Prestá atención. Los signos son: " + signosDelZodiacoSinElementosConOfiuco.join(', '))

let respuestaDelUsuario;

do {
  respuestaDelUsuario = prompt("¿Te animas a adivinar cuál es el nuevo signo? ¿Cuál es?")
} while (!respuestaDelUsuario || respuestaDelUsuario.toLowerCase() !== nuevoSigno.toLowerCase())

alert("¡Correcto! " + nuevoSigno + " es el nuevo signo del zodiaco.")






