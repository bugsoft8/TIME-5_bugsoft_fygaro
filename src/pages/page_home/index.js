//função para fazer com que o header apareça somente apartir de um ponto especifico da tela
window.addEventListener('scroll', function() {
        var elemento = document.querySelector('.home_header');
        // variavel que define a altura apartir da qual o elemento aparecera
        var alturaDesejada = 595; 
    
        if (window.scrollY >= alturaDesejada) {
            elemento.classList.add('header_show');
        }else {
            elemento.classList.remove('header_show');
        }
        
  });