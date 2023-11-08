function Header () {
    const userOnline = true
    const name = 'Nathan';
    const productsInCart = 5;
    return (
        <header>
            <nav>
                <lu>
                    { userOnline ? <li>{name}</li> : <li>Veuillez vous connecter</li> }

                    <li>Home</li>
                    <li>Products</li>
                    
                    { productsInCart > 0 ? <li>Cart : {productsInCart} </li> : <li>Pas d'items au panier</li> }
                </lu>
            </nav>
        </header>
    )
}

export default Header