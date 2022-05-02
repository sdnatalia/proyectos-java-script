// Element.getBoundingClientRect(): El método devuelve el tamaño de un elemento y su posición relativa a la ventana gráfica.
// pageYOffset: es una propiedad de ventana de solo lectura que devuelve el número de píxeles que el documento se ha desplazado verticalmente.
// slice : extrae una sección de una cadena sin modificar la cadena original
//offsetTop - Un número, que representa la posición superior del elemento, en píxeles

// ********** Establece la fecha ************
// Selecciona span
const date = document.getElementById("date");
//Funcion para obtener el año actual del sistema y sustituye en HTML
date.innerHTML = new Date().getFullYear();

// ********** Cerrar links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
//Para la lista despegable cuando se disminuye el tamaño de la ventana, cambiando el height
navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  } 
});

// ********** navbar fija ************
//Aunque se baje la ventana para vfer mas contenido, la navbar se queda fija
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // Vuelve al enlace principal, al inicio superior

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** Funcion scroll ************
// Seleccion por links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    //  default
    e.preventDefault();
    // desplazamineto a una seccion (link) seleccionada
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // Cerrar
    linksContainer.style.height = 0;
  });
});

/* Temas vistos
document.getElementById(): Devuelve una referencia al elemento por su ID, esto registrado en el HTML.
getFullYear(): devuelve el año de la fecha indicada acorde a la hora local.
getBoundingClientRect():devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización (viewport).
método slice: Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
window.scrollTop(): Desplaza la ventana a un lugar particular en el documento.
*/