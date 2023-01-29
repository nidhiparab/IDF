import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const StudentRegistrationForm = () => {
  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [grade, setGrade] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare data to send to server
    const data = { firstName, middleName, lastName, gender, dob, grade };

    // Use fetch to make a POST request to server endpoint
    try {
      const response = await fetch("/api/register-student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // Do something with successful response
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" mx-auto p-20 items-center shadow-2xl shadow-slate-700 rounded-2xl w-2/3">
        <label className="mx-auto px-5 block text-sm font-medium mb-2">
          First Name:
          <input
            className="  w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>

        <label className=" px-5 block text-sm font-medium mb-2">
          Middle Name:
          <input
            className="  w-full py-3 px-4  my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
          />
        </label>

        <label className=" px-5 block text-sm font-medium mb-2">
          Last Name:
          <input
            className="  w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>

        <label className=" px-5 block text-sm font-medium mb-2">
          Gender:
          <select
            className="  w-full py-3 px-4 my-2border rounded-xl bg-slate-200 focus:outline-none border-none "
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select a gender</option>
            <option value="Female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="px-5 block text-sm font-medium mb-2">
          Date of Birth:
          <input
            className="  w-full py-3 px-4  my-2 border rounded-xl bg-slate-200 focus:outline-none border-none text-black"
            type="date"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
        </label>

        <button
          className="items-center  w-full bg-indigo-500 text-white py-2 px-4 my-2 rounded-md hover:bg-indigo-600"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default StudentRegistrationForm;
