// PDF.js
newFunction();
function newFunction() {
    const fileInput = document.getElementById('pdf-upload');
    const pdfIframe = document.getElementById('pdf-iframe');

    fileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            const objectURL = URL.createObjectURL(file);
            pdfIframe.src = objectURL;
        } else {
            alert('Por favor, selecciona un archivo PDF.');
        }
    });
}

