import './NavBar.css'


const NavBar = () => {
    return (
        <nav className="NavBar">
            <img src={'./images/coffeelogo.jpg'} alt="LOGO" width="50px"/>
            <h1>BISTREA SHOP</h1>
            <div className="NavBarMenu">
                <ul>
                    <li className="Item">INICIO</li>
                    <li className="Item">PRODUCTOS</li>
                    <li className="Item">CONTACTO</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

