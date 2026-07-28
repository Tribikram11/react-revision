import Student from "./components/Student"

function App() {
  const students = [
    {
      id: 1,
      name: 'tutul',
      rollNumber: 33,
      department: 'cse',
      attendance: 76,
      email: 'a@gmail.com',
      phoneNo: 1234567890
    },
    {
      id: 2,
      name: 'viki',
      rollNumber: 34,
      department: 'ece',
      attendance: 67,
      email: 'b@gmail.com',
      phoneNo: 1237894560
    },
    {
      id: 3,
      name: 'somya',
      rollNumber: 35,
      department: 'eee',
      attendance: 84,
      email: 'c@gmail.com',
      phoneNo: 451238907
    },
    {
      id: 4,
      name: 'sujit',
      rollNumber: 36,
      department: 'eee',
      attendance: 24,
      email: 'd@gmail.com',
      phoneNo: 1234789590
    },
    {
      id: 5,
      name: 'udit',
      rollNumber: 37,
      department: 'cse',
      attendance: 82,
      email: 'e@gmail.com',
      phoneNo: 7531567890
    }
  ]

  return (
    <>

      <h2>Total students : {students.length} | {students.filter((student) => (student.attendance < 75)).length}</h2>
      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          rollNumber={student.rollNumber}
          department={student.department}
          attendance={student.attendance}
          email={student.email}
          phoneNo={student.phoneNo} />
      ))}
    </>
  )
}

export default App