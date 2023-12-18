import './ItemDetail.css';

const ItemDetail = ({id, nombre,precio,img}) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum culpa vel voluptate deserunt repellendus eligendi architecto quisquam? Eius necessitatibus qui excepturi voluptates ducimus quo. Rem fugit placeat tenetur accusantium!</p>
            <img src= {img} alt={nombre} />
        </div>
    )
}

export default ItemDetail