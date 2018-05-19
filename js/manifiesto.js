/*MANIFIESTO*/
let a = document.getElementById("texto");
let rest = a.innerHTML;
console.log(rest);

let botonModificar = document.getElementById("modificar");
let botonGuardar = document.getElementById("guardar");
let botonRestaurar = document.getElementById("restaurar");
let botonCompartir = document.getElementById("compartir");
let botonSocial3 = document.getElementById("social3");

function modificar() {
    a.contentEditable = "true";
    a.style.background = "#000000";
    a.style.color = "#ffffff";
    botonGuardar.style.display = "block";
    botonModificar.style.display = "none";
    botonRestaurar.style.display = "block";

}

function guardar() {
    a.contentEditable = "false";
    a.style.background = "#ffffff";
    a.style.color = "#000000";
    botonGuardar.style.display = "none";
    botonModificar.style.display = "block";
    botonRestaurar.style.display = "none";
    botonCompartir.style.display = "block";
    botonSocial3.style.display = "none";
}

function restaurar() {
    a.innerHTML = rest;
}

function compartir() {
    botonCompartir.style.display = "none";
    botonSocial3.style.display = "block";
}

function saveTextAsFile() {
    let doc = new jsPDF();
    let splitText = doc.splitTextToSize(a.textContent, 270);
    doc.setFontSize(12);
    doc.text(splitText, 10, 10);
    doc.save('WhiteProject - manifiesto.pdf');
}