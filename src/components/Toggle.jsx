import { useState } from "react"

function Toggle(){
    const [on, setOn] = useState(false);

    const handleClick = () => {
      setOn(!on)
    }

    return (
        <>
            {on ? <p>ON</p> : <p>OFF</p>}
            <button onClick={handleClick}>toggle</button>
        </>
    )
}

export default Toggle