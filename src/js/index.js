/*
    Interação: Ao passar o mouse em cima do personagem na lista, adicionar a borda azul de seleção na imagem pequena do personagem ao mesmo tempo que o nome, texto e imagem são substitúidas de acordo na seção de personagem selecionado
    
        OBJETIVO 1 - ao passar o personagem em cima do personagem na listagem, é preciso selecioná-lo
    
            passo 1 - pegar os personagens no JS para poder verificar todas as vezes que o usuário passar o mouse acima de cada um
    
            passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
    
            passo 3 - verificar se já existia um personagem selecionado, se sim, devemos remover a seleção dele

        OBJETIVO 2 - ao passar o mouse em cima de um personagem, trocar a imagem, o nome e a descrição na seção de personagem selecionado
        
            passo 1 - pegar o elemento do personagem grande para adicionar informações nele
        
            passo 2 - alterar a imagem do personagem grande

            passo 3 - alterar o nome do personagem grande

            passo 4 - alterar a descrição do personagem grande
    
*/

// OBJETIVO 1 - ao passar o personagem em cima do personagem na listagem, é preciso selecioná-lo
    
    // passo 1 - pegar os personagens no JS para poder verificar todas as vezes que o usuário passar o mouse acima de cada um

    // Seleciona todos os elementos da classe personagem e coloca em uma variável constante
    const personagens = document.querySelectorAll('.personagem');
    console.log(personagens);

    // passo 2 - adicionar a classe "selecionado" no personagem que o usuário passar o cursor do mouse, pois é esta classe que contém a estilização do contorno azul

    // Garante que a função em seguida vai agir e, cada elemento de classe personagem da variável personagens
    personagens.forEach((personagem) => {
        
        // Rastrear quando o mouse passar por cima de um elemento de classe personagem
        personagem.addEventListener('mouseenter', () => {

            if(window.innerWidth < 450){
                window.scrollTo({top: 0, behavior: 'smooth'});
            }

            //Tudo dentro das chaves serão consequências do evento "mouse em cima de personagem"
            
        // passo 3 - verificar se já existia um personagem selecionado, se sim, devemos remover a seleção dele
        
        // Achar um elemento de classe selecionado, jogar em uma variável constante e removar a tag "selecionado"
        removerSelecaoPersonagem();

        // Adicionar "selecionado" à classe do personagem que tiver o mouse passado em cima
         personagem.classList.add('selecionado');

        // OBJETIVO 2 - ao passar o mouse em cima de um personagem, trocar a imagem, o nome e a descrição na seção de personagem selecionado
        
            // passo 1 - pegar o elemento do personagem grande para adicionar informações nele
            // passo 2 - alterar a imagem do personagem grande
            alterarImagemPersonagemSelecionado(personagem);

            // passo 3 - alterar o nome do personagem grande
            alterarNomePersonagemSelecionado(personagem);
            
            // passo 4 - alterar a descrição do personagem grande
            alterarDescricaoPersonagemSelecionado(personagem);
        
        })
    })

    


function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

