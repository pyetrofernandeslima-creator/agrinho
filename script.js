// Selecionando os elementos do HTML
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adicionando um evento de clique ao botão
botao.addEventListener('click', () => {
    mensagem.textContent = 'Parabéns! O JavaScript está funcionando perfeitamente! 🚀';
    mensagem.style.color = '#2ea44f';
    mensagem.style.fontWeight = 'bold';
});