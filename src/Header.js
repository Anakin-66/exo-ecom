function Header () {

    const userInfos = {
        lastname: "Frangeul",
        firstname: "Nathan",
        job: "web dev",
    }

    const userOnline = true
    const name = 'Nathan';
    const productsInCart = 5;
    
    return (
        <header>
            <nav>
                <lu>
                    {/* Opérateur ternaire exo 1 */}
                    { userOnline ? <li>{name}</li> : <li>Veuillez vous connecter</li> }
                    {/* Opérateur ternaire exo 3 */}
                    { userOnline ? <li>{userInfos.lastname} {userInfos.firstname} - {userInfos.job}</li> : <li>Veuillez vous connecter</li> }

                    <li>Home</li>
                    <li>Products</li>
                    {/* Opérateur ternaire exo 2 */}
                    { productsInCart > 0 ? <li>Cart : {productsInCart} </li> : <li>Pas d'items au panier</li> }
                </lu>
            </nav>
        </header>
    )
}

export default Header