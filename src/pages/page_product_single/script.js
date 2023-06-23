const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    if($checkbox.checked==true){
        document.getElementById("imagem").src="../../assets/images/product_single.svg";
    }
    else{
        document.getElementById("imagem").src="../../assets/images/product_single.svg";
    }
});