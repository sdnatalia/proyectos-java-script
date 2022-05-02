//Declaracion de variables para el juego
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
//Variables del juego
let result = 0
let hitPosition
let currentTime = 60
let timerId = null
//Ubicacion del topo
function randomSquare() {
    //Quitar el topo
  squares.forEach(square => {
    square.classList.remove('mole')
  })
//Ubicacion aleatoria del topo
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')
//Ubicacion del topo
  hitPosition = randomSquare.id
}
//Registro de golpés al topo
squares.forEach(square => {
    //Evento por si "golpea al topo"
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
        //Sumar score y mostrarlo
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})
//Tiempo de intervalo para mover el topo a otra direccion
function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()
//Cronometro del juego
function countDown() {
    //Restar tiempo
 currentTime--
 //Mostrar en pantalla
 timeLeft.textContent = currentTime
//Fin del juego por tiempo terminado
 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}
//Inicio (Reinicio) del juego
let countDownTimerId = setInterval(countDown, 1000)

/* Temas vistos
  • querySelector(): Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento)
                     que coincida con el grupo especificado de selectores.
  • addEventListener(): Registra un evento a un objeto en específico.
  • setInterval(): Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso.
  • classList:  Es una forma práctica de acceder a la lista de clases de un elemento como una cadena de texto delimitada por espacios a través de element.className.
  • forEach(): Ejecuta la función indicada una vez por cada elemento del array.
  • Arrow functions: Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.
     =>

*/