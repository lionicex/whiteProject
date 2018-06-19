let p = document.getElementById("text");
let restoreText = p.innerHTML;
let modifyButton = document.getElementById("modify");
let saveButton = document.getElementById("save");
let restoreButton = document.getElementById("restore");
let shareButton = document.getElementById("share");
let socialManifestButton = document.getElementById("social-manifest");
let autor = document.getElementById("autorName");
let closeButton = document.getElementById("button-close");
let manifestBackground = document.getElementById("manifest-background");
let cancelled;
let editableName = "Escribe nombre + ";

function modify() {
    p.contentEditable = "true";
    manifestBackground.style.background = "#000000";
    manifestBackground.style.padding = "20px 20% 20px 20px";
    p.style.color = "#ffffff";
    closeButton.style.display = "block";
    saveButton.style.display = "block";
    modifyButton.style.display = "none";
    restoreButton.style.display = "block";
    autor.style.display = "inline-block";
    cancelled = document.getElementById("text").innerHTML;

}

function save() {
    p.contentEditable = "false";
    manifestBackground.style.background = "#ffffff";
    manifestBackground.style.padding = "20px 20% 20px 0";
    p.style.color = "#000000";
    closeButton.style.display = "none";
    saveButton.style.display = "none";
    modifyButton.style.display = "block";
    restoreButton.style.display = "none";
    shareButton.style.display = "block";
    socialManifestButton.style.display = "none";
    autor = document.getElementById("autorName");

    if (autor.textContent === editableName) {
        autor.style.display = "none";
    } else {
        autor.style.display = "inline-block";
    }
}

function cancelChanges() {
    p.innerHTML = cancelled;
    save();
}

function restore() {
    p.innerHTML = restoreText;
}

function share() {
    shareButton.style.display = "none";
    socialManifestButton.style.display = "block";
}

function downloadInPdf() {
    let doc = new jsPDF();
    let splitText = doc.splitTextToSize(p.textContent, 267);
    let title = 'Manifiesto';

    doc.setProperties({
        title: 'Manifiesto'    // The rest are optional
        // subject: 'Mi Manifiesto',
        // author: '',
        // keywords: 'manifiesto, whiteproject',
        // creator: 'lionicex'
    });

    doc.rect(0, 0, 297, 25, 'F');
    doc.setTextColor(255);
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
    email.href = 'mailto:?body=' + encodeURI(p.textContent);
}

function setTwitterHref() {
    let twitter = document.getElementById('twitter-button');
    twitter.href = 'http://twitter.com/share?url=http://wwww.whiteproject.com&hashtags=Manifiesto&text=' +
        encodeURI(p.textContent);
}