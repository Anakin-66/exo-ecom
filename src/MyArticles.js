function myArticles () {

    const productsFromDb = ["Aspirateur", "Mixeur", "Grille-Pain"]
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

    return (
        <>
            <main>
                {productsFromDb.map((products) => {
                    return (
                        <article>
                            <h2>{products}</h2>
                            <p>{lorem}</p>
                        </article>
                    )
                })}
              
            </main>
        </>
    )
}

export default myArticles