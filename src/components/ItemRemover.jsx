function ItemRemover() {
    const arr = ["sweet","lemon","grape","apple"]
    function display(item){
        console.log(item)
    }

    return (<>
        {arr.map((item) => (
            <button key={item} onClick={() => display(item)}>remove {item}</button>
        ))}
    </>)


}

export default ItemRemover


