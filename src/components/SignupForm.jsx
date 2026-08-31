import { useState } from "react"

function SignupForm(){
    const [formData, setFormData] = useState({username : "", email: "", password: ""})

    const handleChange = (e) => {
        const {name, value} = e.target ;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const validForm = formData.username && formData.email.includes("@") && formData.password.length >= 6;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (<>

        <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChange} value={formData.username} />
        {!formData.username && <p>username should not be empty</p>}

        <input type="email" name="email" onChange={handleChange} value={formData.email} />
        {formData.email && !formData.email.includes("@") && <p>Enter a valid email</p>}

        <input type="password" name="password" onChange={handleChange} value={formData.password} />
        {formData.password && formData.password.length < 6 && <p>password length should be at least six letters</p> }

        <button disabled={!validForm}>submit</button>
        </form>
    </>)
}

export default SignupForm


