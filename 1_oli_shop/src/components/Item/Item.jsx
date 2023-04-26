import React from 'react'

const Item = ({id, name, img, price, stock}) => {
    return (
    <article>
        <header>
            <h2>
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} width={170} />
        </picture>
        <section>
            <p>
                Precio: ${price}
            </p>
            <p>
                Stock disponible: {stock}
            </p>
        </section>
        <footer>
            <button>Ver detalle</button>
        </footer>
    </article>
    )
}

export default Item