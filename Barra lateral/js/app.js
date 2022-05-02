//Variables HTML
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar= document.querySelector(".sidebar");
//Funcion para el boton de desplazamiento
toggleBtn.addEventListener("click", function(){
    console.log(sidebar.classList);
    //Metodo alternativo
/*     if(sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");

    }else {
        sidebar.classList.add("show-sidebar");
    } */
//Solo se usa classlist para agregar el CSS en el mismo boton en html
sidebar.classList.toggle("show-sidebar");

});
//Boton de cerrar sidebar
closeBtn.addEventListener("click", function(){
    //Solo se usa classlist para eliminar el CSS en el mismo boton en html
    sidebar.classList.remove("show-sidebar");
});

/*
Temas vistos
classList.toggle():Cuando sólo hay un argumento presente: Alterna el valor de la clase; 
                    ej., si la clase existe la elimina y devuelve false, si no, la añade y devuelve true.
                Cuando el segundo argumento está presente: Si el segundo argumento se evalúa como true, se añade 
                la clase indicada, y si se evalúa como false, la elimina.
classList.remove(): Elimina las clases indicadas.
*/