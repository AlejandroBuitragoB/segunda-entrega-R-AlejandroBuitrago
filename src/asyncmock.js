import proteinaGrande from "../src/assets/img/proteina-grande.webp"
import proteinaPequeña from "../src/assets/img/proteina-pequeña.avif"
import proteinaVegana from "../src/assets/img/proteina-vegana.jpg"
import creatinaGrande from "../src/assets/img/creatina-grande.webp"
import creatinaPequeña from "../src/assets/img/creatina-pequeña.jpg"
import barritasChocolate from "../src/assets/img/barritas-chocolate.webp"
import barritasFrutosRojos from "../src/assets/img/barritas-frutos-rojos.jpg"
import barritasMani from "../src/assets/img/barritas-mani.webp"

const productos = [
    { id: "1", nombre: "Proteina grande", precio: 50000, img: proteinaGrande, idCat: "2" },
    { id: "2", nombre: "Proteina pequeña", precio: 38000, img: proteinaPequeña, idCat: "2" },
    { id: "3", nombre: "Proteina vegana", precio: 60000, img: proteinaVegana, idCat: "2" },
    { id: "4", nombre: "Creatina grande", precio: 29000, img: creatinaGrande, idCat: "3" },
    { id: "5", nombre: "Creatina pequeña", precio: 19000, img: creatinaPequeña, idCat: "3" },
    { id: "6", nombre: "Barras de chocolate", precio: 15000, img: barritasChocolate, idCat: "4" },
    { id: "7", nombre: "Barras de frutos rojos", precio: 15000, img: barritasFrutosRojos, idCat: "4" },
    { id: "8", nombre: "Barras de maní", precio: 15000, img: barritasMani, idCat: "4" },
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
