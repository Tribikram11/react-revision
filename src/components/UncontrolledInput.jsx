import { useRef } from "react"

function UncontrlledInput() {
    const inputref = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted value :", inputref.current.value)
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input ref={inputref} defaultValue="" />
            <button type="submit" >search</button>
        </form>
    </>)
}

export default UncontrlledInput