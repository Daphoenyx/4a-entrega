

const mostrarJuegos = (juegos) => {
    const contenedorJuegos = document.querySelector("#data");
    contenedorJuegos.innerHTML = "";
    juegos.forEach((juego) => {
        const div = document.createElement ("div");
        div.innerHTML = `<h3>${juego.nombre}</h3>
                        <img src = "./${juego.img}" </>
                        <h5>${juego.categoria}</h5>
                        <h5>${juego.anio}</h5>
                        <h4>${juego.precio} euros</h4>
                        <button id = '${juego.id}' class ="comprar"> COMPRAR </button>`;
    contenedorJuegos.appendChild(div);
    const boton = document.getElementById(`${juego.id}`);
    boton.addEventListener("click", () => {
			agregar(juego.id);
                    })
    })
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const agregar = (id) => {
    if (!carrito.some((juego) => juego.id === id)) {
        const juego = juego.find((juego) => juego.id === id)
        carrito.push(juego)
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito()
}

mostrarJuegos(juegos);
