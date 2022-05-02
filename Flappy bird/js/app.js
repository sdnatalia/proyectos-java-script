//Ejecucion del juego 
document.addEventListener('DOMContentLoaded' , () => {
    //Variables a utlizar para el juego
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground-moving')
    //Propiedades de la figura
    let birdLeft = 220
    let birdBottom = 100
    let gravity = 3
    let isGameOver = false
    let gap = 430

//Iniciar juego
    function startGame() {
        //Disminuyendo la gravedad del ave
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        //Simulando el movimiento hacia adelante del ave
        bird.style.left = birdLeft + 'px'
    }
    //Tiempo juego
    let gameTimerId = setInterval(startGame, 20)
//Uso del teclado para volar *barra espaciadora*
    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }
//Funcion para brincar
    function jump() {
        //Brincar
        if (birdBottom < 500) birdBottom += 50
        //Redireccion del ave hacia arriba
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
    }
    //Saltar
    document.addEventListener('keyup', control)

//Generacion de obstaculos
    function generateObstacle() {
        //Ubicacion obstaculo
        let obstacleLeft = 500
        //Tamaño del obstaculo
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        //Variables HTML
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        //En caso de no chocar
        if (!isGameOver) {
            //Agregar obstaculo (normal y arriba)
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        }
        //Visualizacion en el juego (obstaculos)
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'
        //Remover obstaculos
        function moveObstacle() {
            //Calculos para detectar posicion del obstaculo
            obstacleLeft -=2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'
            //Remover obstaculo
            if (obstacleLeft === -60) {
                clearInterval(timerId)
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(topObstacle)
            }
            //Fin del juego, ganador
            if (
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -200)||
                birdBottom === 0 
                ) {
                gameOver()
                clearInterval(timerId)
            }
        }
        let timerId = setInterval(moveObstacle, 20) 
        if (!isGameOver) setTimeout(generateObstacle, 3000)

    }
    //Generacion de obstaculos
    generateObstacle()

//Fin del juego
    function gameOver() {
        clearInterval(gameTimerId)
        console.log('game over')
        isGameOver = true
        document.removeEventListener('keyup', control)
        ground.classList.add('ground')
        ground.classList.remove('ground-moving')
    }


})

/*Temas vistos
createElement(): Crea un elemento HTML especificado por su tagName, o un  HTMLUnknownElement si su tagName no se reconoce. 
forEach(): Ejecuta la función indicada una vez por cada elemento del array.
setInterval(): Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso.
clearInterval(): Cancela una acción reiterativa que se inició mediante una llamada a setInterval.
removeChild(): Elimina un nodo hijo del DOM y puede devolver el nodo eliminado.
appendChild(): Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
addEventListener(): Registra un evento a un objeto en específico. El Objeto especifico puede ser un simple elemento en un archivo, el mismo  documento , una ventana
removeEventListener():remueve del EventTarget un detector de evento previamente registrado con EventTarget.addEventListener. El detector de evento a ser removido es 
                identificado usando una combinación de tipos de eventos, la misma funcion del detector de eventos, y muchas opciones adicionales que pueden afectar
 */