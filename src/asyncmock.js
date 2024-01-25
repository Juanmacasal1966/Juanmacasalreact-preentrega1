const productos = [
    {id:1, nombre: "Jordan Fire Red",precio: 350000, img: "/jordanfirered.jpg",idCat: "2", stock: 100 },
    {id:2, nombre: "Puma Slipstream",precio: 150000, img: "/zapatillas-puma-slipstream-bball-blanca-640010394945002-1.jpg", idCat: "2", stock: 100 },
    {id:3, nombre: "Addidas",precio: 170000, img: "/zapatilla adidas ozweego.webp", idCat:"3", stock: 100 }
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}