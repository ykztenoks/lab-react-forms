import "./App.css"
import { useState } from "react"
import Navbar from "./components/Navbar"
import TableHeader from "./components/TableHeader"
import StudentCard from "./components/StudentCard"

import studentsData from "./assets/students.json"
import AddStudent from "./components/AddStudent"

function App() {
  const [students, setStudents] = useState(studentsData)

  const handleSubmit = (e, newStudent, setNewStudent) => {
    e.preventDefault()

    setStudents([...students, newStudent])
    setNewStudent({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2023,
      graduated: false,
    })
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent handleSubmit={handleSubmit} />
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />
        })}
    </div>
  )
}

export default App
