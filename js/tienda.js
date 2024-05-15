const seccionTienda = document.getElementById("sectionTienda");

const libros = [
    {titulo: "Bajo la misma estrella", categoria: "romance",precio: 8999, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735724/bajo_la_misma_estrella_kvks2g.jpg"},
    {titulo: "Eleanor y Park", categoria: "romance",precio: 12500, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735740/eleanor_y_park_cbhbxr.jpg"},
    {titulo: "El hobbit", categoria: "fantasia",precio: 11000, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735740/el_hobbit_amawdi.jpg"},
    {titulo: "Cinder", categoria: "ciencia ficcion",precio: 12300, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735740/cinder_hdarb7.jpg"},
    {titulo: "Escrito en el agua", categoria: "misterio",precio: 15000, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735752/escrito_en_el_agua_mkdma9.jpg"},
    {titulo: "La chica del tren", categoria: "misterio",precio: 14200, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735773/La_Chica_Del_Tren_uoafps.jpg"},
    {titulo: "Harry Potter y la piedra filosofal", categoria: "fantasia",precio: 12600, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735773/Harry_Potter_y_la_piedra_filosofal_rjsysk.jpg"},
    {titulo: "La quinta ola", categoria: "ciencia ficcion",precio: 9600, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735773/la_quinta_ola_ay0jji.jpg"},
    {titulo: "Si decido quedarme", categoria: "romance",precio: 12100, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735773/Si_decido_quedarme_eiaz55.jpg"},
    {titulo: "Los juegos del hambre", categoria: "ciencia ficcion",precio: 17000, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735773/los_juegos_del_hambre_k6ljkx.jpg"},
    {titulo: "Yo antes de ti", categoria: "romance",precio: 12000, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735773/Yo_Antes_De_Ti_gi65pm.jpg"},
    {titulo: "¿Quién mató a Alex?", categoria: "misterio",precio: 14000, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735773/quien_mato_a_alex_wzwu9m.jpg"},
    {titulo: "La selección", categoria: "reomance",precio: 7000, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735773/la_seleccion_whjbtm.jpg"},
    {titulo: "Correr o Morir", categoria: "ciencia ficcion",precio: 16000, img: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735774/maze_runner_jwntht.jpg"}
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
    precio.textContent = `$${libro.precio}`;

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
