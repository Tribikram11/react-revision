import { useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce";

function SearchBox(){
    const[value, setvalue] = useState("");
    const debounceQuery = useDebounce(value, 500);

    useEffect(() => {
        if(debounceQuery){
            console.log("fetching results for",debounceQuery)
        }

    },[debounceQuery])

    return <input value={value} onChange={(e) => setvalue(e.target.value)} placeholder="enter" type="text" />

}

export default SearchBox

