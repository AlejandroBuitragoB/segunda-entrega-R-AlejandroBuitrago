import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://www.vhv.rs/dpng/d/34-341172_icono-carro-de-compras-hd-png-download.png";

    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
            <strong> 3 </strong>
        </div>
    )
}

export default CartWidget
