document.getElementById('curriculo_download').addEventListener('click', function() {

    var pdfRoute = '../components/curriculo.pdf';
    
    // link temporário para download
    var link = document.createElement('a');
    link.href = pdfRoute;
    link.download = 'curriculo.pdf'; 
    link.click(); //clique no link para iniciar o download
});
