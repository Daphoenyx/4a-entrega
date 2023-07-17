

let listaJuegos = document.getElementById("listaJuegos")

const getGames = async () => { 
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    let juegos = data.results
    juegos.forEach(juego => {
        let div = document.createElement("div")
        div.innerHTML =
        `<h5>${juego.title}</h5>`

        listaJuegos.append(div)
})

getGames ();


const contenedorVideojuegos = document.querySelector('#contenedorVideojuegos');
console.log(contenedorVideojuegos);

const mostrarVideojuegos = (data) => {
    data.forEach(videojuego => {
        const div = document.createElement('div')
        div.innerHTML = `<h5>${videojuego.nombre}</h5>
                            <h5>${videojuego.categoria}</h5>
                            <h5>${videojuego.anio}</h5>
                            <h5>${videojuego.precio} euros</h5>
                            <button id = '${videojuego.id}' class ="comprar"> COMPRAR </button>`
        contenedorVideojuegos.appendChild(div)
    });
    const comprar = document.querySelectorAll('.comprar')
    comprar.forEach(el => {
        el.addEventListener('click', (e) => {
            agregar(e.target.id)
        })
    })
}

mostrarVideojuegos(videojuegos)

localStorage.setItem("cart", JSON.stringify(cart));
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function agregar (id) {
    let encontrar = videojuegos.find (prod => prod.id === parseInt (id))
    cart.push (encontrar)
}}
