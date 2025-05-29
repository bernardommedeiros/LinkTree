document.getElementById('curriculo_download').addEventListener('click', () => {

    var pdfRoute = 'static/docs/curriculo.pdf';
    
    // link temporário para download
    var link = document.createElement('a');
    link.href = pdfRoute;
    link.download = 'curriculo.pdf'; 
    link.click(); 
});
