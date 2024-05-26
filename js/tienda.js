const seccionTienda = document.getElementById("sectionTienda");

const libros = [
    {titulo: "Bajo la misma estrella", categoria: "romance",precio: 8999, img: "../img/bajo-la-misma-estrella.jpg"},
    {titulo: "Eleanor y Park", categoria: "romance",precio: 12500, img: "../img/eleanor-y-park.jpg"},
    {titulo: "El hobbit", categoria: "fantasia",precio: 11000, img: "../img/el-hobbit.jpg"},
    {titulo: "Los pilares de la tierra", categoria: "fantasia",precio: 12300, img: "../img/los-pilares-de-la-tierra.jpg"},
    {titulo: "Escrito en el agua", categoria: "misterio",precio: 15000, img: "../img/escrito-en-el-agua.jpg"},
    {titulo: "La chica del tren", categoria: "misterio",precio: 14200, img: "../img/la-chica-del-tren.jpg"},
    {titulo: "Harry Potter y la piedra filosofal", categoria: "fantasia",precio: 12600, img: "../img/harry-potter-y-la-piedra-filosofal.jpg"},
    {titulo: "Juego de tronos: Canción de fuego y hielo", categoria: "fantasia",precio: 9600, img: "../img/juego-de-tronos-cancion-de-hielo-y-fuego.jpg"},
    {titulo: "Tiempo de matar", categoria: "terror",precio: 12100, img: "../img/tiempo-de-matar.jpg"},
    {titulo: "Los juegos del hambre", categoria: "ciencia ficcion",precio: 17000, img: "../img/los-juegos-del-hambre.jpg"},
    {titulo: "Mil soles espléndidos", categoria: "novela",precio: 50000, img: "../img/mil-soles-esplendidos.jpg"},
    {titulo: "¿Quién mató a Alex?", categoria: "misterio",precio: 14000, img: "../img/quien-mato-a-alex.jpg"},
    {titulo: "La selección", categoria: "reomance",precio: 7000, img: "../img/la-seleccion.jpg"},
    {titulo: "22/11/63", categoria: "terror",precio: 9000, img: "../img/22-11-63.jpg"}
]

const divContainerLibros = document.createElement("div");
divContainerLibros.classList.add("divContainerLibros")

const selectCategoria = document.getElementById("categorias");

selectCategoria.addEventListener("change", filtrarLibros);

function filtrarLibros() {
    const categoriaSeleccionada = selectCategoria.value;

    divContainerLibros.innerHTML = "";

    if (categoriaSeleccionada === "0") {
        libros.forEach(libro => {
            crearCardLibro(libro);
        });
    } else {
        const librosFiltrados = libros.filter(libro => libro.categoria === categoriaSeleccionada);
        librosFiltrados.forEach(libro => {
            crearCardLibro(libro);
        });
    }
}

function crearCardLibro(libro) {
    const divCard = document.createElement("div");
    divCard.classList.add("divCard");

    const img = document.createElement("img");
    img.classList.add("imgCard");
    img.src = libro.img;
    img.alt = libro.titulo;

    const titulo = document.createElement("h2");
    titulo.textContent = libro.titulo;
    titulo.classList.add("tituloLibro");

    const precio = document.createElement("h5");
    precio.classList.add("precioCard");
    precio.textContent = `$${libro.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

    const botonAgregarCarrito = document.createElement("button");
    botonAgregarCarrito.classList.add("boton");
    botonAgregarCarrito.textContent = "Agregar";

    divCard.appendChild(img);
    divCard.appendChild(titulo);
    divCard.appendChild(precio);
    divCard.appendChild(botonAgregarCarrito);

    divContainerLibros.appendChild(divCard);
    seccionTienda.appendChild(divContainerLibros);
}

filtrarLibros();
