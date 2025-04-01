document.getElementById('curriculo_download').addEventListener('click', function() {

    var pdfRoute = '../components/curriculo.pdf';
    
    // cria um link temporário para download
    var link = document.createElement('a');
    link.href = pdfRoute;
    link.download = 'curriculo.pdf'; // Nome do arquivo ao ser baixado
    link.click(); // Simula o clique no link para iniciar o download
});
