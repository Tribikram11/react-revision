import { useState } from "react"

function PasswordList(){
    const [showPassword, setShowPassword] = useState(false)

    const handleClick = () => {
        setShowPassword(!showPassword)
    }

    return(
        <>
        
            <input type={showPassword ? "text" : "password"} name="" id="" />
            <button onClick={handleClick}>show/hide</button>
        </>
    )
}

export default PasswordList