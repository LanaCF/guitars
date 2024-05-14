export const ProductsBlock = (props) => {
    const { loading, filteredData } = props

    return (
        <div className="products-block">
            {
                loading ? (
                    <p>Дані завантажуються...</p>
                ) : (
                    filteredData.map(guitar => (
                        <div key={guitar.id} className="guitar">
                            <div className="guitar-img-box">
                                <img src={process.env.PUBLIC_URL + guitar.img} alt={guitar.title} className="guitar__img" />
                            </div>
                            <div className="guitar-info">
                                <h3>{guitar.title}</h3>
                                <p className="info"><b>Бренд:</b> {guitar.brand}</p>
                                <p className="info"><b>Кількість струн:</b> {guitar.numberStrings}</p>
                                <p className="info"><b>Колір:</b> {guitar.color}</p>
                                <p className="info"><b>Тип:</b> {guitar.type}</p>
                                <p className="info"><b>Країна:</b> {guitar.country}</p>
                                <p className="info"><b>Ціна:</b> {guitar.price} грн.</p>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}