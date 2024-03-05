/*variables*/
var user="torres";
var pass=1995;

/*seleccionando a la clase*/
const boton = document.querySelector('.menu-java');
const sidebar = document.querySelector(".menu-navegacion");

/*retorno de la consola*/
console.log(boton);
console.log(sidebar);

/*agregando proteccion a un perfil*/
function ir(){
    if(document.enlace.login.value==user && document.enlace.password.value==pass)
    {
        document.enlace.submit();
    }
    else{
        function display_image(src, width, height, alt) {
            var pendejo = document.createElement("img");
            pendejo.src = src;
            pendejo.width = width;
            pendejo.height = height;
            pendejo.alt = alt;
            document.body.appendChild(pendejo);
        }
        
        display_image('https://media.tenor.com/M8B9m6MazUQAAAAC/estas-bien-pendejo-renatosx.gif', 400, 128, '');
        alert("POR FAVOR PARA VER SU FACEBOOK MIRE ABAJO");
        setTimeout(() => {document.location.reload();}, 8000);
    }
}

/*cada ves que toque el menu del icono busque la clase dependiendo si la tiene o no*/
boton.addEventListener('click', ()=>{
    sidebar.classList.toggle("abrir-menu")
})

/*codigo para cerrar el boton del menu*/
window.addEventListener('click', e =>{
    if(sidebar.classList.contains('abrir-menu') && e.target != sidebar && e.target != boton) {
        console.log('cerrar')
        sidebar.classList.toggle("abrir-menu")
    }
})