function myArticles () {

    const productsFromDb = [
        {
            title: "Aspirateur",
            price: 20,
            isPunblished: true,
        },
        {
            title: "Grille-Pain",
            price: 30,
            isPublished: true,
        }, 
        {
            title: "Mixeur",
            price: 40,
            isPublished: false,
        }, 
        {
            title: "Lampe",
            price: 5,
            isPublished: true,
        } 
]

    return (
        <>
            <main>
                {productsFromDb.map((products) => {
                    return (
                        <article>
                            <h2>{products.title}</h2>
                            <p>{products.price + ` euros`}</p>
                            {products.isPublished ? <p>Produit disponible</p> : <p>Produit indisponible</p>} 
                        </article>
                    )
                })}
              
            </main>
        </>
    )
}

export default myArticles