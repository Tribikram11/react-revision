import { useState } from "react";


function useToggle(initialValue = false){
    const [toggle, setToggle] = useState(initialValue)

    const change = () => setToggle(prev => !prev)

    return [toggle, change]
}

export default useToggle;