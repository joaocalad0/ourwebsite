const reasonsListItems = document.querySelectorAll('.reasons-list li');

// Adiciona a classe 'show' a todos os itens imediatamente ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    reasonsListItems.forEach(item => {
        item.classList.add('show');
    });
});

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8; // Define um ponto de gatilho

    reasonsListItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top; // Obtém a posição do item em relação à janela

        // Adicione um console.log para depuração
        console.log(`Item ${index}: ${itemTop} < ${triggerBottom}`);

        if (itemTop < triggerBottom) {
            // Se o item está acima do triggerBottom, adicione a classe 'show'
            item.classList.add('show');
        } else {
            // Opcional: Remover a classe 'show' se o item não estiver visível
            item.classList.remove('show');
        }
    });
});
