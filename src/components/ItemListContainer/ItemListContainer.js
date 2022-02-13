import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = ({ greeting }) => {
    const addtoCart = (count) => {
        console.log(`Se agregan al carrito ${count} productos`);
    
      };
    return (
        <div className='ItemListcontainer'>
        <h1 className='Saludo'>{greeting}</h1>
        <ItemCount stock={10} initial={0} addtoCart={addtoCart} />
        </div>
    )
}


export default ItemListContainer