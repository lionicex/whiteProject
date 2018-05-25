/*MANIFIESTO*/
let a = document.getElementById("texto");
let rest = a.innerHTML;
let botonModificar = document.getElementById("modificar");
let botonGuardar = document.getElementById("guardar");
let botonRestaurar = document.getElementById("restaurar");
let botonCompartir = document.getElementById("compartir");
let botonSocial3 = document.getElementById("social3");
let autor = document.getElementById("nombre");
let cerrar = document.getElementById("button-close");
let fondo = document.getElementById("manifiesto-bg");


function modificar() {
    a.contentEditable = "true";
    fondo.style.background = "#000000";
    fondo.style.padding = "20px 20% 20px 20px";
    a.style.color = "#ffffff";
    cerrar.style.display = "block";
    botonGuardar.style.display = "block";
    botonModificar.style.display = "none";
    botonRestaurar.style.display = "block";
    autor.style.display = "inline-block";

}

function guardar() {
    a.contentEditable = "false";
    fondo.style.background = "#ffffff";
    fondo.style.padding = "20px 20% 20px 0";
    a.style.color = "#000000";
    cerrar.style.display = "none";
    botonGuardar.style.display = "none";
    botonModificar.style.display = "block";
    botonRestaurar.style.display = "none";
    botonCompartir.style.display = "block";
    botonSocial3.style.display = "none";

}

function close() {
    console.log("ejecutado close");
    restaurar();
    guardar();

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
    let splitText = doc.splitTextToSize(a.textContent, 267);
    let title = 'Manifiesto';

    doc.setProperties({
        title: 'Manifiesto'    // The rest are optional
        // subject: 'Mi Manifiesto',
        // author: '',
        // keywords: 'manifiesto, whiteproject',
        // creator: 'lionicex'
    });

    doc.rect(0, 0, 297, 25, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica');
    doc.setFontType('bold');
    doc.setFontSize(40);
    doc.text(title, 15, 20);
    doc.setTextColor(0);
    doc.setFont('times');
    doc.setFontType('roman');
    doc.setFontSize(12);
    doc.text(splitText, 10, 35);
    doc.save('WhiteProject - manifiesto.pdf');
}

function setEmailHref() {
    let email = document.getElementById('email-button');
    email.href = 'mailto:?body=' + encodeURI(a.textContent);
}

function setTwitterHref() {
    let twitter = document.getElementById('twitter-button');
    twitter.href = 'http://twitter.com/share?url=http://wwww.whiteproject.com&hashtags=Manifiesto&text=' +
        encodeURI(a.textContent);
}