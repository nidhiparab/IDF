import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const StudentRegistrationForm = () => {
  // State for form inputs
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [grade, setGrade] = useState('')

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Prepare data to send to server
    const data = { firstName, middleName, lastName, gender, dob, grade }

    // Use fetch to make a POST request to server endpoint
    try {
      const response = await fetch('/api/register-student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      // Do something with successful response
    } catch (error) {
      // Handle error
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Middle Name:
        <input
          type="text"
          value={middleName}
          onChange={(event) => setMiddleName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <br />
      <label>
       Gender:
       <select value={gender} onChange={(event) => setGender(event.target.value)}>
       <option value="">Select a gender</option>
       <option value="Female">Female</option>
       <option value="male">Male</option>
       <option value="other">Other</option>
       </select>
      </label>
      <br/>
      <label>
        Date of Birth:
        <input
          type="date"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit">Register</button>
    </form>
  )
}

export default StudentRegistrationForm









