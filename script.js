// Aguarda o conteúdo da página ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona o container principal
    const mainContainer = document.querySelector('.container');

    // Adiciona a classe 'visible' após um pequeno atraso para ativar a animação CSS
    // O timeout garante que a transição seja executada corretamente
    setTimeout(() => {
        if (mainContainer) {
            mainContainer.classList.add('visible');
        }
    }, 100); // 100 milissegundos de atraso

});