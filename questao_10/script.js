function mostrarValor() {
    if(document.getElementById("sabor").value == "chocolate"){
    alert("Amo sorvete de chocolate")
}else{
    alert("Prefiro outros sabores")
}
}

document.getElementById("sabor").onkeydown = function (e) {
    if (event.which == 13) {
        mostrarValor();
        return false;
    }
}