
//Creacion de document: Este proceso sera cargado al inicair el sitio web, el cual iniciara con dichos valores siguientes
document.addEventListener('DOMContentLoaded', () => {
    //Contenido del juego
    const grid = document.querySelector('.grid')
    //Contenido del muñeco
    const doodler = document.createElement('div')
    //Variables para iniciar el juego; las configuraciones necesarias de cada caracteristicas del juego
    let isGameOver = false
    let speed = 3
    let platformCount = 5
    let platforms = []
    let score = 0
    let doodlerLeftSpace = 50
    let startPoint = 150
    let doodlerBottomSpace = startPoint
    const gravity = 0.9
    let upTimerId
    let downTimerId
    let isJumping = true
    let isGoingLeft = false
    let isGoingRight = false
    let leftTimerId
    let rightTimerId
  //La clase es encargada de asignar la plataforma verde en el juego de manera random.
    class Platform {
      constructor(newPlatBottom) {
          //Cambio de posicion de plataforma por medio de random
        this.left = Math.random() * 315
        this.bottom = newPlatBottom
        this.visual = document.createElement('div')
        //Asignacion de la plataforma en el juego
        const visual = this.visual
        visual.classList.add('platform')
        visual.style.left = this.left + 'px'
        visual.style.bottom = this.bottom + 'px'
        grid.appendChild(visual)
      }
    }
  
  //Creacion de la plataforma, cada que vaya avanzado la figura, se va distribuyendo la imagen de la plataforma 
    function createPlatforms() {
      for(let i =0; i < platformCount; i++) {
        let platGap = 600 / platformCount
        let newPlatBottom = 100 + i * platGap
        let newPlatform = new Platform (newPlatBottom)
        platforms.push(newPlatform)
        console.log(platforms)
      }
    }
  //Funcion para eliminar plataformas ya pasadas por la figura, ademas de mover las plataformas de la vista
    function movePlatforms() {
      if (doodlerBottomSpace > 200) {
          platforms.forEach(platform => {
            platform.bottom -= 4
            let visual = platform.visual
            visual.style.bottom = platform.bottom + 'px'
            //Remover plataforma de la vista y agregar uno nuevo
            if(platform.bottom < 10) {
              let firstPlatform = platforms[0].visual
              firstPlatform.classList.remove('platform')
              platforms.shift()
              console.log(platforms)
              score++
              var newPlatform = new Platform(600)
              platforms.push(newPlatform)
            }
        }) 
      }
      
    }
    //Creacion del doodler, asignando un tamaño y posicion de la figura
    function createDoodler() {
        //Agrega la figura al campo
      grid.appendChild(doodler)
      doodler.classList.add('doodler')
      //Tamaño ubicacion del objeto
      doodlerLeftSpace = platforms[0].left
      doodler.style.left = doodlerLeftSpace + 'px'
      doodler.style.bottom = doodlerBottomSpace + 'px'
    }
  //Funcion  para eliminar la identificacion del temporizador de inactividad, es decir para que se sienta que esta brincando
  //Ademas de detectar que perdio el usuario
  function fall() {
    isJumping = false
      clearInterval(upTimerId)
      downTimerId = setInterval(function () {
        doodlerBottomSpace -= 5
        doodler.style.bottom = doodlerBottomSpace + 'px'
        if (doodlerBottomSpace <= 0) {
          gameOver()
        }
        platforms.forEach(platform => {
          if (
            (doodlerBottomSpace >= platform.bottom) &&
            (doodlerBottomSpace <= (platform.bottom + 15)) &&
            ((doodlerLeftSpace + 60) >= platform.left) && 
            (doodlerLeftSpace <= (platform.left + 85)) &&
            !isJumping
            ) {
              console.log('tick')
              startPoint = doodlerBottomSpace
              jump()
              console.log('start', startPoint)
              isJumping = true
            }
        })
  
      },20)
  }
  //Funcion para parecer que este brincando, eliminando plataformas pasadas
    function jump() {
      clearInterval(downTimerId)
      isJumping = true
      upTimerId = setInterval(function () {
        console.log(startPoint)
        console.log('1', doodlerBottomSpace)
        doodlerBottomSpace += 20
        doodler.style.bottom = doodlerBottomSpace + 'px'
        console.log('2',doodlerBottomSpace)
        console.log('s',startPoint)
        if (doodlerBottomSpace > (startPoint + 200)) {
          fall()
          isJumping = false
        }
      },30)
    }
  //Funcion para el movimiento a la izquierda
    function moveLeft() {
      if (isGoingRight) {
          clearInterval(rightTimerId)
          isGoingRight = false
      }
      isGoingLeft = true
      leftTimerId = setInterval(function () {
          if (doodlerLeftSpace >= 0) {
            console.log('going left')
            doodlerLeftSpace -=5
             doodler.style.left = doodlerLeftSpace + 'px'
          } else moveRight()
      },20)
    }
  //Funcion para el movimiento a la derecha
    function moveRight() {
      if (isGoingLeft) {
          clearInterval(leftTimerId)
          isGoingLeft = false
      }
      isGoingRight = true
      rightTimerId = setInterval(function () {
          if (doodlerLeftSpace <= 313) {
          console.log('going right')
          doodlerLeftSpace +=5
          doodler.style.left = doodlerLeftSpace + 'px'
        } else moveLeft()
      },20)
    }
      //Funcion para el movimiento rectilineo
    function moveStraight() {
      isGoingLeft = false
      isGoingRight = false
      clearInterval(leftTimerId)
      clearInterval(rightTimerId)
    }
  
    //Asignar funciones por el movimiento d la figura por medio de las teclas 
    function control(e) {
      doodler.style.bottom = doodlerBottomSpace + 'px'
      if(e.key === 'ArrowLeft') {
        moveLeft()
      } else if (e.key === 'ArrowRight') {
        moveRight()
      } else if (e.key === 'ArrowUp') {
        moveStraight()
      }
    }
  //Fin del juego, reinicia el juego o lo para
    function gameOver() {
      isGameOver = true
      while (grid.firstChild) {
        console.log('remove')
        grid.removeChild(grid.firstChild)
      }
      grid.innerHTML = score
      clearInterval(upTimerId)
      clearInterval(downTimerId)
      clearInterval(leftTimerId)
      clearInterval(rightTimerId)
    }
  
  //Funcion para iniciar el juego, solo llama a las funciones necesarias para comenzar el juego
    function start() {
      if (!isGameOver) {
        createPlatforms()
        createDoodler()
        setInterval(movePlatforms,30)
        jump(startPoint)
        document.addEventListener('keyup', control)
      } 
    }
    start()
  })