import React from "react";
import Item from "../Item/Item";


export default function ItemList({ products }) {
    return (
        <div className="ItemList">
            {products.map((product) => ( // Esta funcion nos retorna un array
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}
