import useToggle from "../hooks/useToggle"

function PasswordVisibilty(){
    const [pass, visible] = useToggle(false);

    return(<>
    <input type={pass ? "text" : "password"} />
        <button onClick={visible}>check</button>
    </>)
}

export default PasswordVisibilty