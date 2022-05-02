//Arreglo de informacion de las personas del carrusel
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

//Seleccion de variables HTML
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
//Botones HTML
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//Valor inicial posicion
let currentItem = 0;

//Cargar la primera persona
window.addEventListener("DOMContentLoaded" , function(){
    showPerson();
});

//Mostrar personas
function showPerson(){
  //Muestra imagen e info
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;

}

//Boton siguiente: Mostrar la persona siguiente del array
nextBtn.addEventListener("click", function(){
    //Un contador para saber la ubicacion de cada persona en el array y en el carrusel
    currentItem++;
    //Contador > total de personas array
    if(currentItem > reviews.length - 1){
      //Reinicia ciclo
        currentItem = 0;
    }
    showPerson(currentItem);
});

//Boton anterior: Mostrar la persona anterior del actual del array
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        //Empieza con el ultimo
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

//Boton random: Cualquier persona muestra
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()* reviews.length);
    showPerson(currentItem);
});

/*
Temas vistos:
objetos: Un objeto es un entidad independiente con propiedades y tipos.
DOMContentLoaded:  Se activa cuando el documento HTML inicial se ha cargado y analizado por completo, sin esperar a que
                   las hojas de estilo, las imágenes y los submarcos terminen de cargarse.
addEventListener(): Registra un evento a un objeto en específico. 
arreglo.length: Es una instancia de tipo Array establece o devuelve la cantidad de elementos en esa matriz. 
textContent: Representa el contenido de texto de un nodo y sus dencendientes.
*/