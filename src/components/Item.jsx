import React from 'react'
import ItemCount from './ItemCount'
import './Item.css';

const Item = ({ product }) => {
  const onAdd = (count) => {
    alert(`Se agregaron ${count} productos al carrito`)
  }
  const { stock, price, name, id, image } = product
  return (
    <div className="card-wrap">
      <article className="card">
        <header className="header-card">
          <img src={image} alt="images" />
        </header>
        <footer className="footer-card">
          <div className="categoria-card">
            <span>Categoria</span>
          </div>
          <div className="name-card">
            <h3>Nombre:{name}</h3>
            <p>{id}</p>
            <p>Precio: {price}</p>
            <p>Stock: {stock}</p>
            {/* <button onClick={}></button> */}
            <ItemCount onAdd={onAdd} stock={stock} inicial={1} />
          </div>
        </footer>
      </article>
    </div>
  )
}

export default Item