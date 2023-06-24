const bolinhas = document.getElementsByClassName ('bolinha');

const $payment = document.getElementsByClassName ('btn_payment');

$payment.addEventListener('click', function(){
    
});


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
