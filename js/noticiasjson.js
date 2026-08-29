fetch("data/noticias.json")
.then(respuesta => respuesta.json())
.then(cursos =>{

    const contenedor = document.getElementById("contenedorNoticias");

    cursos.forEach(noticia=>{
        contenedor.innerHTML += `
            <article class="card">

                <h3>${noticia.titulo}</h3>

                <div class="info-noticia">
                    <time datetime="${noticia.fecha}">
                        ${noticia.fecha}
                    </time>

                    <span>
                        ${noticia.categoria}
                    </span>
                </div>

                <img src="${noticia.imagen}" alt="${noticia.titulo}">

                <p>${noticia.descripcion}</p>

            </article>
        `;   
    });

});