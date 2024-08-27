const ingresoTexto = document.getElementById("inputTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const imagen = document.getElementById("imagen");
const texto2 = document.getElementById("texto2");
const box2 = document.getElementById("box2");



let reemplazar = [
   ["e", "enter"],
   ["o", "ober"],
   ["i", "imes"],
   ["a", "ai"],
   ["u", "ufat"],
]

const remplace = (funciones) =>{

    mensajeFinal.innerHTML = funciones;
    imagen.classList.add("oculto");
    ingresoTexto.value="";
    texto2.style.display = "none";
    botonCopiar.style.display = "block";
    box2.classList.add("ajustar")
    mensajeFinal.classList.add("ajustar");
}

const reset = ()=>{
    mensajeFinal.innerHTML ="";
    imagen.style.display ="block";
    texto2.style.display = "block";
    botonCopiar.style.display = "none";
    box2.classList.remove("ajustar")
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}

// Evento para Encriptar el texto

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != "") {
        function encriptar(nuevoMensaje) {
            for (let i = 0; i < reemplazar.length; i++) {
                if (nuevoMensaje.includes(reemplazar[i][0])){
                    nuevoMensaje = nuevoMensaje.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return nuevoMensaje
        };
    } else {
        alert("Ingrese texto a encriptar");
        reset();
    }
    
    remplace(encriptar(texto));
});

// Evento para Desencriptar el texto
botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(nuevoMensaje) {
            for (let i = 0; i < reemplazar.length; i++) {
                if (nuevoMensaje.includes(reemplazar[i][1])){
                    nuevoMensaje = nuevoMensaje.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            };
            return nuevoMensaje;
        };
    }else{
        alert("Ingrese texto a Desencriptar");
        reset();
    }
    remplace(desencriptar(texto));
})

// Evento para copiar el texto
botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);
        alert("Texto copiado al portapapeles");
        reset();
})