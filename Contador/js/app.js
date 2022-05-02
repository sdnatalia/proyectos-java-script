//Valor inicial del contador
let count=0;

//Seleccion de boton y valor
const value= document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
//Ciclo para identificar el proceso a realizar para el contador
btns.forEach( function(btn){
    console.log(btn);
    //Evento boton
    btn.addEventListener("click",function(e){
        //Obtener el nombre boton 
        const styles= e.currentTarget.classList;
        //Identificar metodo
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count++;
        }else {
            count=0;
        }
        //Imprimir resultado
        value.textContent = count;
    });

});
/**
 * Temas vistos
 * document.querySelectorAll(): Devuelve una NodeList estática (no viva) que representa una lista de elementos 
                               del documento que coinciden con el grupo de selectores indicados.
    forEach(): Ejecuta la función indicada una vez por cada elemento del array.
    addEventListener(): Registra un evento a un objeto en específico.
    currentTargetproperty: Identifica el target (objetivo) actual del evento, ya que el evento atraviesa el DOM. 
                            Siempre hace referencia al elmento al cual el controlador del evento fue asociado, a 
                            diferencia de event.target, que identifica el elemento el el que se produjo el evento.
    classList: Devuelve una colección activa de DOMTokenList de los atributos de clase del elemento.
    textContent: Representa el contenido de texto de un nodo y sus dencendientes.
 */