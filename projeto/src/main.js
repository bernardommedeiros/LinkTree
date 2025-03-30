function criarAlerta() {
    // Exibe o alerta
    var alerta = document.getElementById('alerta');
    alerta.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar o alerta

    // Oculta o alerta após 3 segundos
    setTimeout(function() {
        alerta.classList.add('hidden'); // Adiciona a classe 'hidden' para esconder o alerta
    }, 3000);
}