const productos = [
    { id: "1", nombre: "Proteina grande", precio: 50000, img: "public/img/proteina-grande.webp", idCat: "2" },
    { id: "2", nombre: "Proteina pequeña", precio: 38000, img: "public/img/proteina-pequeña.avif", idCat: "2" },
    { id: "3", nombre: "Proteina vegana", precio: 60000, img: "public/img/proteina-vegana.jpg", idCat: "2" },
    { id: "4", nombre: "Creatina grande", precio: 29000, img: "public/img/creatina-grande.webp", idCat: "3" },
    { id: "5", nombre: "Creatina pequeña", precio: 19000, img: "public/img/creatina-pequeña.jpg", idCat: "3" },
    { id: "6", nombre: "Barras de chocolate", precio: 15000, img: "public/img/barritas-chocolate.webp", idCat: "4" },
    { id: "7", nombre: "Barras de frutos rojos", precio: 15000, img: "public/img/barritas-frutos-rojos.jpg", idCat: "4" },
    { id: "8", nombre: "Barras de maní", precio: 15000, img: "public/img/barritas-mani.webp", idCat: "4" },
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

/*activadad numero 3*/

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })

}


/*funcion retorna una categoria*/

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);

        },2000)
    })

}
