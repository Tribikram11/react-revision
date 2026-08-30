import { useRef, useState } from "react"

function FocusableForm(){
    const newref = useRef(null);
    const [count, setCount] = useState(0)

    const renderCountRef = useRef(0);

    renderCountRef.current += 1;
    console.log("Render count:", renderCountRef.current);
    
    const handleClick = () => {
        setCount(prev => prev + 1)
    }

    return(<>
        <input ref={newref} type="" name="" id="" />
        <button onClick={() => newref.current.focus()}>focus input</button>
        <button onClick={handleClick}>increase {count}</button>
    </>)
}

export default FocusableForm