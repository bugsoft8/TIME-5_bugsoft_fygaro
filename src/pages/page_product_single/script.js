
const bolinhas = document.getElementsByClassName ('bolinha');


const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    if($checkbox.checked==true){
        document.getElementById("imagem").src="../../assets/images/product_single.svg";
        
        bolinhas[0].classList.remove('bolinha_verde')
        bolinhas[1].classList.add('bolinha_verde')
    }
    else{
        document.getElementById("imagem").src="../../assets/images/product_single--2.svg";
        bolinhas[1].classList.remove('bolinha_verde')
        bolinhas[0].classList.add('bolinha_verde')
    }
});

function toggleImagem() {
    var imagemDiv = document.getElementById("forma_pagamento");
    if (imagemDiv.style.display === "none") {
        imagemDiv.style.display = "block";
    } else {
        imagemDiv.style.display = "none";
    }
}

var contador = 0;
      
function incrementar() {
  contador++;
  document.getElementById("contador").textContent = contador;
}

function decrementar() {
  if (contador > 0) {
    contador--;
    document.getElementById("contador").textContent = contador;
  }
}


  $(document).ready(function() {
    $('.cep-input').mask('00000-000');
  });

  function toggleDescricao() {
    var descricaoDiv = document.querySelector('.descricao-produto');
    descricaoDiv.classList.toggle('expandir');
  }

  function exibirFormulario() {
    var formularioDiv = document.getElementById("formulario-avaliacao");
    formularioDiv.style.display = "block";
  }

