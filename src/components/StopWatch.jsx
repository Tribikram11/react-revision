import { useEffect, useState } from "react"

function StopWatch() {

    const [second, setSecond] = useState(0);
    const [isRunning, setIsRunning] = useState(false)


    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setSecond(prev => prev + 1)
            }, 1000);
        }

        return () => clearInterval(intervalId)
    }, [isRunning])




    return (
        <>
            <div>{second}</div>
            <button onClick={() => setIsRunning(true)}>start</button>
            <button onClick={() => setIsRunning(false)}>stop</button>
        </>
    )


}

export default StopWatch