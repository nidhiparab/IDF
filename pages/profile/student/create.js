import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import baseUrl from "../../../helpers/baseUrl";

const StudentRegistrationForm = ({ bgs }) => {
  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [bg_id, setBg_id] = useState("");
  const [grade, setGrade] = useState("");
  let router = useRouter();
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare data to send to server
    const data = { bg_id, f_name: firstName, m_name: middleName, l_name: lastName, dob, gender, grade };

    // Use fetch to make a POST request to server endpoint

    const response = await fetch("/api/student/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await response.json();
    if (res.error) console.log(res.error);
    else {
      alert(res.message);
      router.push(`/profile/student/${res.student_id}`)
    }
    // Do something with successful response

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" mx-auto p-20 items-center shadow-2xl shadow-slate-700 rounded-2xl w-2/3">
        <h1 className="text-center font-bold">Student Registration</h1>
        <label className="mx-auto px-5 block text-sm font-medium mb-2">
          First Name:
          <input
            className="  w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>

        <label className=" px-5 block text-sm font-medium mb-2">
          Middle Name:
          <input
            className="  w-full py-3 px-4  my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
            placeholder="Middle Name"
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
          />
        </label>

        <label className=" px-5 block text-sm font-medium mb-2">
          Last Name:
          <input
            className="  w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>

        <label className=" px-5 block text-sm font-medium mb-2">
          Balgurukul:
          <select
            className="  w-full py-3 px-4 my-2border rounded-xl bg-slate-200 focus:outline-none border-none "
            value={bg_id}
            onChange={(event) => setBg_id(event.target.value)}
          >
            <option value="">Select a Balgurukul</option>
            {bgs.map((bg) => { return <option value={bg.bg_id} key={bg.bg_id }>{bg.bg_name}</option> })}
          </select>
        </label>

        <label className=" px-5 block text-sm font-medium mb-2">
          Grade:
          <input
            type="text"
            className="  w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            value={grade}
            onChange={(event) => setGrade(event.target.value)}
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
            <option value="Male">Male</option>
            <option value="Other">Other</option>
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

export async function getServerSideProps() {
  let res = await fetch(baseUrl + "/api/balgurukul/")
  const data = await res.json();
  return {
    props: {
      bgs: data
    }
  }
}

export default StudentRegistrationForm;
