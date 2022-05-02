/*
Los planos se envían como una matriz de cadenas que forman una cuadrícula.


@ = Posición inicial del jugador
o = Monedas
x = superficies sólidas
! = Lava inmóvil
= = Lava en movimiento vertical
v = Lava goteando
| = Lava móvil horizontal

*/

//Primer nivel simple
var simpleLevelPlan = [
    "                      ",
    "                      ",
    "  x              = x  ",
    "  x         o o    x  ",
    "  x @      xxxxx   x  ",
    "  xxxxx            x  ",
    "      x!!!!!!!!!!!!x  ",
    "      xxxxxxxxxxxxxx  ",
    "                      "
  ];
  //Siguientes niveles
  var GAME_LEVELS = [
    ["                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                  xxx           ",
     "                                                   xx      xx    xx!xx          ",
     "                                    o o      xx                  x!!!x          ",
     "                                                                 xx!xx          ",
     "                                   xxxxx                          xvx           ",
     "                                                                            xx  ",
     "  xx                                      o o                                x  ",
     "  x                     o                                                    x  ",
     "  x                                      xxxxx                             o x  ",
     "  x          xxxx       o                                                    x  ",
     "  x  @       x  x                                                xxxxx       x  ",
     "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
     "                              x   x                  x     x                    ",
     "                              x!!!x                  x!!!!!x                    ",
     "                              x!!!x                  x!!!!!x                    ",
     "                              xxxxx                  xxxxxxx                    ",
     "                                                                                ",
     "                                                                                "],
    ["                                      x!!x                        xxxxxxx                                    x!x  ",
     "                                      x!!x                     xxxx     xxxx                                 x!x  ",
     "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
     "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
     "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
     "                                                xx!x         x     o   o                                    xx!x  ",
     "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
     "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
     "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
     "                                                              xx!!!!!!!!!!!xx            v                        ",
     "                                                               xxxx!!!!!xxxx                                      ",
     "                                               x     x            xxxxxxx        xxx         xxx                  ",
     "                                               x     x                           x x         x x                  ",
     "                                               x     x                             x         x                    ",
     "                                               x     x                             xx        x                    ",
     "                                               xx    x                             x         x                    ",
     "                                               x     x      o  o     x   x         x         x                    ",
     "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
     "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
     "             xx       xx        x o x          x    xx               x   x   x               x                    ",
     "     @       x         x        x   x          x     x               x   x   x               x                    ",
     "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
     "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
     "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
     "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
     "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
     "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
     "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
     "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
     "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
    ["                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                        o                                                                     ",
     "                                                                                                              ",
     "                                        x                                                                     ",
     "                                        x                                                                     ",
     "                                        x                                                                     ",
     "                                        x                                                                     ",
     "                                       xxx                                                                    ",
     "                                       x x                 !!!        !!!  xxx                                ",
     "                                       x x                 !x!        !x!                                     ",
     "                                     xxx xxx                x          x                                      ",
     "                                      x   x                 x   oooo   x       xxx                            ",
     "                                      x   x                 x          x      x!!!x                           ",
     "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
     "                                     xx   xx      x   x      x                                                ",
     "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
     "                                      x   x           x                    x!!!x                              ",
     "                                      x   x           x                     xxx                               ",
     "                                     xx   xx          x                                                       ",
     "                                      x   x= = = =    x            xxx                                        ",
     "                                      x   x           x           x!!!x                                       ",
     "                                      x   x    = = = =x     o      xxx       xxx                              ",
     "                                     xx   xx          x                     x!!!x                             ",
     "                              o   o   x   x           x     x                xxv        xxx                   ",
     "                                      x   x           x              x                 x!!!x                  ",
     "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
     "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
     "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
     "                             xx           xx                                         xxx                      ",
     "  xxx                         x     x     x                                         x!!!x                xxx  ",
     "  x x                         x    xxx    x                                          xxx                 x x  ",
     "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
     "  x                           x           x                              x   x                             x  ",
     "  x                           xx          x                              x x x                             x  ",
     "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
     "  x                xxx             o o    x                              x         xxx                     x  ",
     "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
     "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
     "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
     "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
     "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
     "                                                                                                              ",
     "                                                                                                              "],
    ["                                                                                                  xxx x       ",
     "                                                                                                      x       ",
     "                                                                                                  xxxxx       ",
     "                                                                                                  x           ",
     "                                                                                                  x xxx       ",
     "                          o                                                                       x x x       ",
     "                                                                                             o o oxxx x       ",
     "                   xxx                                                                                x       ",
     "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
     "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
     "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
     "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
     "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
     "                                                                                                              ",
     "          o              xxx                              xx                                                  ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                      xx                                                      ",
     "                   xxx         xxx                                                                            ",
     "                                                                                                              ",
     "                          o                                                     x      x                      ",
     "                                                          xx     xx                                           ",
     "             xxx         xxx         xxx                                 x                  x                 ",
     "                                                                                                              ",
     "                                                                 ||                                           ",
     "  xxxxxxxxxxx                                                                                                 ",
     "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
     "  x         x   x       x   x       x   x                 ||                  x     x                         ",
     "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
     "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
     "        x=                  =                =x   x                     xxx                                   ",
     "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
     "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "                                                                                                              "]
  ];
  
  // Supone que el plan es válido (añadir validación para producción)
  function Level(plan) {
    this.width = plan[0].length;
    this.height = plan.length;
    // Array de arrays, cada posición que contiene nulo o un carácter
    this.grid = [];
    // Contiene todos los objetos dinámicos (lava, moneda o jugador),
    // junto con su posición y estado
    this.actors = [];
    
    for (var y = 0; y < this.height; y++) {
      var line = plan[y], gridLine = [];
      for (var x = 0; x < this.width; x++) {
        var ch = line[x], fieldType = null;
        var Actor = actorChars[ch];
        if (Actor)
          // Esto construye el objeto en movimiento referenciado en
          // ActorChars y lo empuja a los actores array
          this.actors.push(new Actor(new Vector(x, y), ch));
        else if (ch == 'x')
          // Pared
          fieldType = 'wall';
        else if (ch == '!')
          // lava estacionaria
          fieldType = 'lava';
        gridLine.push(fieldType);
      }
      this.grid.push(gridLine);
    }
    // Encuentra al jugador
    this.player = this.actors.filter(function(actor) {
      return actor.type == 'player';
    })[0];
    // Rastrea si el jugador ha ganado o perdido;
    // finishDelay mantiene el nivel activo durante un breve período de tiempo
    this.status = this.finishDelay = null;
  }
  //Averiguar si el nivel ha terminado
  Level.prototype.isFinished = function() {
    return this.status != null && this.finishDelay < 0;
  };
  // Averiguar el área de colisión de un jugador
  Level.prototype.obstacleAt = function(pos, size) {
    var xStart = Math.floor(pos.x);
    var xEnd = Math.ceil(pos.x + size.x);
    var yStart = Math.floor(pos.y);
    var yEnd = Math.ceil(pos.y + size.y);
    
    // Los límites superior y lateral del nivel devuelven una pared
    if (xStart < 0 || xEnd > this.width || yStart < 0)
      return 'wall';
    // El límite inferior devuelve lava.
    if (yEnd > this.height)
      return 'lava';
    // Compruebe lo que hay en la cuadrícula alrededor del cuadro de colisión
    for (var y = yStart; y < yEnd; y++) {
      for (var x = xStart; x < xEnd; x++) {
        var fieldType = this.grid[y][x];
        // devuelve 'pared' o 'lava'
        if (fieldType) return fieldType;
      }
    }
  };
  // Rastree qué actores se superponen a un actor determinado
  Level.prototype.actorAt = function(actor) {
    for (var i = 0; i < this.actors.length; i++) {
      var other = this.actors[i];
      if (other != actor &&
          actor.pos.x + actor.size.x > other.pos.x &&
          actor.pos.x < other.pos.x + other.size.x &&
          actor.pos.y + actor.size.y > other.pos.y &&
          actor.pos.y < other.pos.y + other.size.y)
        return other;
    }
  };
  // Incremento de tiempo para Level.animate()
  var maxStep = 0.05;
  // Animar el nivel
  // el paso se dará en segundos, llaves es un objeto que
  // contiene información sobre las teclas de flecha que ha presionado el jugador.
  Level.prototype.animate = function(step, keys) {
    // Used for the delay at the end of a game
    if (this.status != null)
      this.finishDelay -= step;
    
    while (step > 0) {
      var thisStep = Math.min(step, maxStep);
      this.actors.forEach(function(actor) {
        actor.act(thisStep, this, keys);
      }, this);
      step -= thisStep;
    }
  };
  // Manejar colisiones entre actores.
  Level.prototype.playerTouched = function(type, actor) {
    // Lava's been touched
    if (type == 'lava' && this.status == null) {
      this.status = 'lost';
      this.finishDelay = 1;
    } else if (type == 'coin') { // se ha tocado una moneda
      // Retire la moneda que se ha recolectado de la matriz de actores
      this.actors = this.actors.filter(function(other) {
        return other != actor;
      });
      // No más monedas = has ganado
      if (!this.actors.some(function(actor) {
        return actor.type == 'coin';
      })) {
        this.status = 'won';
        this.finishDelay = 1;
      }
    }
  }
  
  var actorChars = {
    '@': Player,
    'o': Coin,
    '=': Lava, '|': Lava, 'v': Lava
  };
  
  // Vector almacena la posición y el tamaño de un actor.
  function Vector(x, y) {
    this.x = x; this.y = y;
  }
  Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }
  Vector.prototype.times = function(factor) {
    return new Vector(this.x * factor, this.y * factor);
  }
  
  // Jugador constructor
  function Player(pos) {
    // Alinea correctamente la parte inferior del reproductor
    // al cuadrado de abajo (se ajusta a la altura del jugador)
    this.pos = pos.plus(new Vector(0, -0.5));
    this.size = new Vector(0.8, 1.5);
    this.speed = new Vector(0, 0);
  }
  Player.prototype.type = 'player';
  // Los movimientos X e Y se manejan de forma independiente porque
  // una pared no debería detener el movimiento hacia arriba y hacia abajo de los saltos
  // y un piso no debe detener el movimiento de lado a lado
  var playerXSpeed = 7;
  Player.prototype.moveX = function(step, level, keys) {
    this.speed.x = 0;
    if (keys.left) this.speed.x -= playerXSpeed;
    if (keys.right) this.speed.x += playerXSpeed;
    
    var motion = new Vector(this.speed.x * step, 0);
    var newPos = this.pos.plus(motion);
    var obstacle = level.obstacleAt(newPos, this.size);
    if (obstacle)
      level.playerTouched(obstacle);
    else
      this.pos = newPos;
  };
  var gravity = 30;
  var jumpSpeed = 17;
  Player.prototype.moveY = function(step, level, keys) {
    this.speed.y += step * gravity;
    var motion = new Vector(0, this.speed.y * step);
    var newPos = this.pos.plus(motion);
    var obstacle = level.obstacleAt(newPos, this.size);
    if (obstacle) {
      level.playerTouched(obstacle);
      if (keys.up && this.speed.y > 0)
        this.speed.y = -jumpSpeed;
      else
        this.speed.y = 0;
    } else {
      this.pos = newPos;
    }
  };
  Player.prototype.act = function(step, level, keys) {
    this.moveX(step, level, keys);
    this.moveY(step, level, keys);
    
    var otherActor = level.actorAt(this);
    if (otherActor)
      level.playerTouched(otherActor.type, otherActor);
    
    // Animación perdida
    if (level.status == 'lost') {
      this.pos.y += step;
      this.size.y -=step;
    }
  };
  
  // Lava constructor
  function Lava(pos, ch) {
    this.pos = pos;
    this.size = new Vector(1, 1);
    if (ch == "=") {
      // Supongo que la velocidad se agregará a this.pos
      // en un método de movimiento agregado más tarde
      this.speed = new Vector(2, 0);
    } else if (ch == '|') {
      this.speed = new Vector(0, 2);
    } else if (ch == 'v') {
      this.speed = new Vector(0, 3);
      this.repeatPos = pos;
    }
  }
  Lava.prototype.type = 'lava';
  // Accion
  Lava.prototype.act = function(step, level) {
    var newPos = this.pos.plus(this.speed.times(step));
    if (!level.obstacleAt(newPos, this.size))
      this.pos = newPos;
    else if (this.repeatPos)
      this.pos = this.repeatPos;
    else
      this.speed = this.speed.times(-1);
  };
  
  // Moneda constructor
  function Coin(pos) {
    this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
    this.size = new Vector(0.6, 0.6);
    this.wobble = Math.random() * Math.PI * 2;
  }
  Coin.prototype.type = 'coin';
  var wobbleSpeed = 8, wobbleDist = 0.07;
  // Accion
  Coin.prototype.act = function(step) {
    this.wobble += step * wobbleSpeed;
    var wobblePos = Math.sin(this.wobble) * wobbleDist;
    this.pos = this.basePos.plus(new Vector(0, wobblePos));
  };
  
  // Función auxiliar que crea un elemento.
  // y le da una clase
  function elt(name, className) {
    var elt = document.createElement(name);
    if (className) elt.className = className;
    return elt;
  }
  
  // Seguimiento de pulsaciones de teclas para el movimiento del jugador
  var arrowCodes = {37: 'left', 38: 'up', 39: 'right'};
  
  function trackKeys(codes) {
    var pressed = Object.create(null);
    function handler(event) {
      if (codes.hasOwnProperty(event.keyCode)) {
        var down = event.type == 'keydown';
        pressed[codes[event.keyCode]] = down;
        event.preventDefault();
      }
    }
    addEventListener('keydown', handler);
    addEventListener('keyup', handler);
    
    pressed.unregister = function() {
      removeEventListener('keydown', handler);
      removeEventListener('keyup', handler);
    };
    
    return pressed;
  }
  
  // Ejecutar la animacion
  function runAnimation(frameFunc) {
    var lastTime = null;
    function frame(time) {
      var stop = false;
      if (lastTime != null) {
        var timeStep = Math.min(time - lastTime, 100) / 1000;
        stop = frameFunc(timeStep) === false;
      }
      lastTime = time;
      if (!stop)
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  
  // Ejecutar el nivel
  var arrows = trackKeys(arrowCodes);
  
  function runLevel(level, Display, andThen) {
    var display = new Display(document.body, level);
    // Se utiliza para almacenar el estado de pausa del juego.
    var running = 'yes';
    
    function handleKey(event) {
      if (event.keyCode == 27) {
        if (running == 'no') {
          running = 'yes';
          runAnimation(animation);
        } else if (running == 'pausing') {
          running = 'yes';
        } else if (running == 'yes') {
          running = 'pausing';
        }
      }
    }
    addEventListener('keydown', handleKey);
    
    function animation(step) {
      if (running == 'pausing') {
        running = 'no';
        return false;
      }
      
      level.animate(step, arrows);
      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        // Remove the watch on the esc key 
        //removeEventListener('keydown', handleKey);
        // Anular el registro de los oyentes de teclas de flecha
        //arrows.unregister();
        if (andThen)
          andThen(level.status);
        return false;
      }
    }
    
    runAnimation(animation);
  }
  
  // Ejecutar el juego
  function runGame(plans, Display) {
    var lives = 3;
    var livesSpan = document.getElementById('lives');
    var gameStatus = document.getElementById('status');
    
    function startLevel(n) {
      livesSpan.textContent = lives;
      runLevel(new Level(plans[n]), Display, function(status) {
        if (status == 'lost') {
          lives--;
          if (lives == 0) {
            gameStatus.textContent = 'Game Over';
            console.log('Game over');
          }
          else 
            startLevel(n);
        }
        else if (n < plans.length - 1)
          startLevel(n + 1);
        else
          console.log('You win!');
      });
    }
    startLevel(0);
  }
  
  
  // DOMDisplay usa el DOM para dibujar el programa
  function DOMDisplay(parent, level) {
    this.wrap = parent.appendChild(elt('div', 'game'));
    this.level = level;
    
    // Background se dibuja solo una vez
    this.wrap.appendChild(this.drawBackground());
    // El actorLayer is animated in the drawFrame() method
    this.actorLayer = null;
    this.drawFrame();
  }
  // Establecer la escala de 1 unidad de cuadrícula
  var scale = 20;
  // Dibuja el background
  DOMDisplay.prototype.drawBackground = function() {
    var table = elt('table', 'background');
    table.style.width = this.level.width * scale + 'px';
    this.level.grid.forEach(function(row) {
      var rowElt = table.appendChild(elt('tr'));
      rowElt.style.height = scale + 'px';
      row.forEach(function(type) {
        rowElt.appendChild(elt('td', type));
      });
    });
    return table;
  };
  // Dibuja los actores
  DOMDisplay.prototype.drawActors = function() {
    var wrap = elt('div');
    this.level.actors.forEach(function(actor) {
      var rect = wrap.appendChild(elt('div', 'actor ' + actor.type));
      rect.style.width  = actor.size.x * scale + 'px';
      rect.style.height = actor.size.y * scale + 'px';
      rect.style.left   = actor.pos.x * scale + 'px';
      rect.style.top    = actor.pos.y * scale + 'px';
    });
    return wrap;
  };
  // Redibuja los actores
  DOMDisplay.prototype.drawFrame = function() {
    if (this.actorLayer)
      this.wrap.removeChild(this.actorLayer);
    this.actorLayer = this.wrap.appendChild(this.drawActors());
    // La clase de estado se utiliza para diseñar el jugador en función de
    // el estado del juego (ganado o perdido)
    this.wrap.className = 'game ' + (this.level.status || '');
    this.scrollPlayerIntoView();
  };
  // Asegúrate de que el reproductor esté siempre en la pantalla
  DOMDisplay.prototype.scrollPlayerIntoView = function() {
    var width = this.wrap.clientWidth;
    var height = this.wrap.clientHeight;
    var margin = width / 3;
    
    // El viewport
    var left = this.wrap.scrollLeft, right = left + width;
    var top = this.wrap.scrollTop, bottom = top + height;
    
    // center hace uso de los métodos vectoriales definidos anteriormente
    var player = this.level.player;
    var center = player.pos.plus(player.size.times(0.5))
                    .times(scale);
    
    if (center.x < left + margin)
      this.wrap.scrollLeft = center.x - margin;
    else if (center.x > right - margin)
      this.wrap.scrollLeft = center.x + margin - width;
    if (center.y < top + margin)
      this.wrap.scrollTop = center.y - margin;
    else if (center.y > bottom - margin)
      this.wrap.scrollTop = center.y + margin - height;
  }
  // Clear the level
  DOMDisplay.prototype.clear = function() {
    this.wrap.parentNode.removeChild(this.wrap);
  };
  
  
  runGame(GAME_LEVELS, DOMDisplay);
  
  
  
  