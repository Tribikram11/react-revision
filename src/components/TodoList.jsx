function TodoList() {
    const arr = [{id:1,text:'moon'},{id:2, text:'sun'},{id:3, text:'saturn'},{id:4, text:'jupiter'},{id:5, text:'mars'}]

    return (
        <ul>
        {arr.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}
        </ul>
    )


}

export default TodoList;