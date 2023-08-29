

function activarPanel(){

    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");

    contenedor.classList.toggle("active");
    boton.classList.toggle("active");
}

var link = document.getElementById("fileCss");

function themeSecundary() {
    link.href="Css/style-secundary.css";
}


function themeThree(){
    link.href="Css/style-three.css";
}


function themeOne(){
    link.href="Css/style.css";
}