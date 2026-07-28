import { useState } from "react"

function Student({ name, rollNumber, department, attendance, email, phoneNo }) {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(prev => !prev)
    }

    return (
        <>
            <h3>{name}</h3>
            <p>Roll Number: {rollNumber}</p>
            <p>Department: {department}</p>
            <p>Attendance: {attendance}%</p>

            {attendance < 75 && <p>attendance below requirement</p>}

            <button onClick={handleClick}>{expanded ? 'hide' : 'expand'}</button>

            {expanded && (
                <div>
                    <p>email:{email}</p>
                    <p>phoneNo:{phoneNo}</p>
                </div>
            )
            }
        </>
    )
}

export default Student