//Ejecucion del juego en el sistio
document.addEventListener('DOMContentLoaded', () => {
    //Array de las cartas (name,image)
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]
  //Ordenar el arreglo de manera random
    cardArray.sort(() => 0.5 - Math.random())
  //Variables del HTML
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    //Variables del juego
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //Creacion de la tabla de barajeo de imagenes
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //Chequeo de imagenes similares
    function checkForMatch() {
        //Cartas
      const cards = document.querySelectorAll('img')
      //Tarjeta imagen 1 similar
      const optionOneId = cardsChosenId[0]
      //Tarjeta imagen 2 similar
      const optionTwoId = cardsChosenId[1]
      //Si se presiona la misma opcion 2 veces
      if(optionOneId == optionTwoId) {
          //Ambas cartas cambian por una imagen arcoiris
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        //Alerta de error
        alert('You have clicked the same image!')
      }
        //Si ambas cartas son similares
      else if (cardsChosen[0] === cardsChosen[1]) {
          //Alerta de ganador
        alert('You found a match')
        //Ambas cartas cambian por una imagen blanca
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        //Remueve el evento de la tarjeta blanca
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
          //Las carta no son similares, se vuelven imagen arcoiris
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        //Alerta de error
        alert('Sorry, try again')
      }
      //Variables para guardar el avance del juego
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      //Si se encontro todas: Ganamos!!
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //Voltear la carta
    function flipCard() {
        //Asignacion de id cada carta
      let cardId = this.getAttribute('data-id')
      //Eleccion de carta
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      //Cambio de imagen
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  //Creacion del tablero
    createBoard()
  })

  /* Temas vistos
    • push(): Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
    • querySelector(): Devuelve el primer elemento del documento (utilizando un recorrido primero en 
                        profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.
    • SetAttribute(): Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, 
                        en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.
    • getAttribute(): Devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, el valor retornado puede ser tanto null como "" (una cadena vacía).
    • appendChild(): Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
    • Math.random(): Retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1).
    • sort(): Ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. 
    • For loops: Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.
    • createElement(): Crea un elemento HTML especificado por su tagName, o un  HTMLUnknownElement si su tagName no se reconoce. 
  
  */