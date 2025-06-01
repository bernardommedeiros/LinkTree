document.getElementById('curriculo_download').addEventListener('click', () => {

    var pdfRoute = 'static/docs/CV_Bernardo.pdf';
    
    // link temporário para download
    var link = document.createElement('a');
    link.href = pdfRoute;
    link.download = 'curriculo.pdf'; 
    link.click(); 
});
