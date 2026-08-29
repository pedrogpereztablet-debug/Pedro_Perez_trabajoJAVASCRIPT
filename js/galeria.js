const imagenes = [
    {
        src: "../assets/img/soldadura.png",
        alt: "Persona soldando un componente",
        titulo: "Soldadura THD",
        descripcion: "Trabajo de precisión con soldadura THD."
    },
    {
        src: "../assets/img/forklift.jpg",
        alt: "Carretilla elevadora counterbalance",
        titulo: "Carretilla elevadora counterbalance",
        descripcion: "Operación de almacén con carretilla elevadora."
    },
    {
        src: "../assets/img/forkliftRea.png",
        alt: "Montacargas de pasillo estrecho",
        titulo: "Montacargas de pasillo estrecho",
        descripcion: "Operación de almacén con montacargas de pasillo estrecho",
    },
];

let indice = 0;

function mostrarImagen() {
    const imagen = document.getElementById("imagenGaleria");
    /* Muestro y tomo los atributos de img alt y src */
    imagen.src = imagenes[indice].src;
    imagen.alt = imagenes[indice].alt;
    
    /****** tomo y muestro los atributos de h2 y p *****/
    document.getElementById("titulo").textContent = imagenes[indice].titulo;
    document.getElementById("descripcion").textContent = imagenes[indice].descripcion;
};

function siguiente() {
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    };
    mostrarImagen();
};
function anterior() {
    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1;
    };
    mostrarImagen();
};