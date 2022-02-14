import React from 'react';
import './Item.css';

export default function Item({ product }) {
    return (
        <div className="card-container">
            <div className="ItemCard">
                <img className='ImgCard' src={'./images/Colombia.PNG'} width='300' />            
                <h1 className='NameCard'>Café Colombia</h1>
                <p>Descripcion</p>
                <button className='item-button btn btn-primary agregarCarrito"'>Agregar</button>
            </div>
            <div className="ItemCard">
                <img className='ImgCard' src={'./images/Peru.PNG'} width='300' />            
                <h1 className='NameCard'>Café Perú</h1>
                <p>Descripcion</p>
                <button className='item-button btn btn-primary agregarCarrito"'>Agregar</button>
            </div>
            <div className="ItemCard">
                <img className='ImgCard' src={'./images/Guatemala.PNG'} width='300' />            
                <h1 className='NameCard'>Café Guatemala</h1>
                <p>Descripcion</p>
                <button className='item-button btn btn-primary agregarCarrito"'>Agregar</button>
            </div>
        </div>
    )
}
