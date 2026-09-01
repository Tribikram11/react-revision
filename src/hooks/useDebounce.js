import { useEffect, useState } from "react";

function useDebounce(value, delay){
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeoutid = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);

        return () => {
            clearInterval(timeoutid);
        }
    },[value, delay])

    return debouncedValue
}

export default useDebounce;