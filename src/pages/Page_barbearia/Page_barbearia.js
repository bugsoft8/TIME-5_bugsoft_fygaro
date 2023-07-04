
let filterSwitch = true;

function exibirFiltro() {
    const filterContainer = document.getElementById("btn-container");
    if (filterSwitch) {
        filterContainer.style.display = "block";
        filterSwitch= false;
    }else{
        filterContainer.style.display = "none";
        filterSwitch = true;
    }
}

