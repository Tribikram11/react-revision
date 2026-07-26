function ShoppingList() {
    const arr = [{
        id: 1,
        name: "shirt",
        price: 299
    },
    {
        id: 2,
        name: "vest",
        price: 199
    },
    {
        id: 3,
        name: "t-shirt",
        price: 159
    },
    {
        id: 4,
        name: "pant",
        price: 499
    }]


    return (
        <>
            <ol>
                {arr.map((item) => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ol>

            <div>
               Total: {arr.reduce((acc, item) => {
                   return acc + item.price
                }, 0)}
            </div>
        </>
    )
}

export default ShoppingList