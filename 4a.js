

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
                        <button id = 'agregar ${juego.id}' class ="comprar"> COMPRAR </button>`;
    contenedorJuegos.appendChild(div);
    const boton = document.getElementById(`${juego.id}`)
    boton.addEventListener("click", () => {
			agregarCart(juego.id);
                    })
    })
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const agregarCart = (id) => {
    if (!carrito.some((juego) => juego.id === id)) {
        const juego = juego.find((juego) => juego.id === id)
        carrito.push(juego)
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito()
}

mostrarJuegos(juegos);

const mostrarCarrito = () => {
    const contCart = document.querySelector(".carrito")
    contCart.innerHTML = ""
    if (carrito.lenght>0) {
        const juegosCart = document.createElement("ul")
        juegosCart.classList.add("juegosCart")
        contCart.appendChild(juegosCart)
        const contTot = document.createElement("div")
        actualizarTot(contTot)
        contCart.appendChild(contTot)
        carrito.forEach((juego) => {
            const li = document.createElement("li")
            li.innerHTML = `<h3>${juego.nombre}</h3>
                            <img src = "./${juego.img}" </>
                            <h5>${juego.categoria}</h5>
                            <h5>${juego.anio}</h5>
                            <h4>${juego.precio} euros</h4>
                            <button id = 'eliminar ${juego.id}' class ="eliminar"> COMPRAR </button>`;
            juegosCart.appendChild(li)
            const boton = document.getElementById('eliminar ${juego.id}')
            boton.addEventListener("click", () => {
                eliminarJuego(juego.id)
            })
        })
    } else {
        contCart.innerHTML = '<div class = "vacio">El carrito está vacio.</div>'
    }
}

const eliminarJuego = (id) => {
    carrito = carrito.filter((juego) => juego.id !== id)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito()
}

const actualizarTot = (cont) => {
    const tot = carrito.reduce((acumular, juego) => acumular + juego.precio, 0)
    cont.textContent = `Total: ${tot} euros`
}