function Header () {
    const userOnline = true
    const name = 'Nathan';
    const ProductsInCart = 5;
    return (
        <header>
            <nav>
                <lu>
                    { userOnline ? <li>{name}</li> : <li>Veuillez vous connecter</li> }

                    <li>Home</li>
                    <li>Products</li>
                    
                    { ProductsInCart > 0 ? <li>Cart : {ProductsInCart} </li> : <li>Pas de produits dans le panier</li> }
                </lu>
            </nav>
        </header>
    )
}

export default Header