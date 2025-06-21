import { useState } from "react"

function AddStudent({ handleSubmit }) {
  const [newStudent, setNewStudent] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  })

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, newStudent, setNewStudent)}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            value={newStudent.fullName}
            placeholder="Full Name"
            onChange={handleChange}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            value={newStudent.image}
            placeholder="Profile Image"
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            value={newStudent.phone}
            placeholder="Phone"
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={newStudent.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={newStudent.program}
            onChange={handleChange}
          >
            <option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            name="graduationYear"
            type="number"
            value={newStudent.graduationYear}
            placeholder="Graduation Year"
            onChange={handleChange}
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={newStudent.graduated}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  )
}

export default AddStudent
