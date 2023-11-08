function Header () {
    const userOnline = true
    const name = 'Nathan'
    return (
        <header>
            <nav>
                <lu>
                    <li>Home</li>
                    <li>Products</li>
                    { userOnline ? <li>{name}</li> : <li>Veuillez vous connecter</li> }
                    
                </lu>
            </nav>
        </header>
    )
}

export default Header