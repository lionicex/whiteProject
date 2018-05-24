/*MANIFIESTO*/
let a = document.getElementById("texto");
let rest = a.innerHTML;
let botonModificar = document.getElementById("modificar");
let botonGuardar = document.getElementById("guardar");
let botonRestaurar = document.getElementById("restaurar");
let botonCompartir = document.getElementById("compartir");
let botonSocial3 = document.getElementById("social3");
let autor = document.getElementById("nombre");


function modificar() {
    a.contentEditable = "true";
    a.style.background = "#000000";
    a.style.color = "#ffffff";
    botonGuardar.style.display = "block";
    botonModificar.style.display = "none";
    botonRestaurar.style.display = "block";
    autor.style.display = "inline-block";
    console.log(a.innerHTML.length);
    console.log(rest.length);
    console.log(a.textContent.length);

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
    if (a.length == rest.lenght) {
        autor.style.display = "none";
    }

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