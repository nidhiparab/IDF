import React from 'react';
import baseUrl from '../../../helpers/baseUrl';
import gradeConstants from '../../../lib/grades';
import styles from '../../../styles/Grade.module.css';
import { useState } from 'react';
import { useFormik } from 'formik';

const OptionComponent = ({ options, value, onChange, isVisible }) => {
  let gradeOptions = gradeConstants[value];
  let columns = gradeOptions.columns;
  let grade_opt = gradeOptions.options;
  if (!isVisible) return <></>
  return (
    <div>
      {Object.keys(columns).map((key_col) => {
        let value = columns[key_col];
        return (<div key={key_col}>
          <br />
          <br />
          <h4>{value}</h4>
          <div>
            <ul className={styles.options}>
              {Object.keys(grade_opt).map((key_opt) => {
                return (
                  <li key={key_opt}>
                    <input
                      type="radio"
                      name={key_col}
                      value={grade_opt[key_opt]}
                      checked={grade_opt[key_opt] == "Not Applicable" ? true : false}
                      onChange={(e) => {
                        e.preventDefault();

                      }}
                    />
                    <label htmlFor={key_col}>{grade_opt[key_opt]} </label>
                  </li>)
              })}
            </ul>
          </div>

        </div>)
      })}
    </div>
  )
}


const CreateGrade = ({ bg, students }) => {

  const [selected, setSelected] = useState(students[0]);
  const [studentDetails, setStudentDetails] = useState(true);
  const [qualities, setQualities] = useState(false);
  const [subject, setSubject] = useState(false);
  const [intrests, setIntrests] = useState(false);
  const [specifics, setSpecifics] = useState(false);

  const formik = useFormik({
    initialValues: {
      studentDetails: {
        student_id: '',
        bg_id: '',
        f_name: '',
        m_name: '',
        l_name: '',
        dob: '',
        gender: '',
        grade: '',
      },
      qualities: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
        Q5: '',
        Q6: '',
        Q7: '',
        Q8: '',
        Q9: '',
        Q10: '',
        Q11: '',
        Q12: ''
      },
      subjects: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
        Q5: ''
      },
      intrests: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
        Q5: '',
        Q6: '',
        Q7: '',
        Q8: '',
        Q9: ''
      },
      specifics: {
        Q1: '',
        Q2: '',
        Q3: ''
      }
    },

  });


  function changeTab(e, tab) {
    e.preventDefault();
    setStudentDetails(tab == 'studentDetails' ? true : false);
    setQualities(tab == 'qualities' ? true : false);
    setSubject(tab == 'subjects' ? true : false);
    setIntrests(tab == 'intrests' ? true : false);
    setSpecifics(tab == 'specifics' ? true : false);
  }


  const StudentDetails = ({ bg, student, isVisible }) => {
    if (!isVisible) return <></>
    return (
      <div>
        <label htmlFor="name">Name </label>
        <input type="text" {...formik.getFieldProps('studentDetails.f_name')} />
        <input type="text" {...formik.getFieldProps('studentDetails.m_name')} />
        <input type="text" {...formik.getFieldProps('studentDetails.l_name')} />
      </div>
    )
  };





  return (
    <>
      <div className="flex flex-row justify-between m-5">
        <div className="flex flex-col p-20 border">Student
          <div>
            {!selected ? <></> : <>
              <div className="">
                <h1 className="text-blue-700">
                  {selected.f_name} {selected.m_name} {selected.l_name}
                </h1>
                <p>
                  {selected.grade}<br />
                  {selected.gender}
                </p>
              </div>

            </>
            }
          </div>
        </div>
        <div className="flex flex-col border pl-20 pr-20">Sections
          <div className="flex flex-row">
            <div className="flex flex-col border m-1 p-2" onClick={(e) => { changeTab(e, "studentDetails") }}>Student Details</div>
            <div className="flex flex-col border m-1 p-2" onClick={(e) => { changeTab(e, "qualities") }}>Qualities</div>
            <div className="flex flex-col border m-1 p-2" onClick={(e) => { changeTab(e, "intrests") }}>Intrests</div>
            <div className="flex flex-col border m-1 p-2" onClick={(e) => { changeTab(e, "subjects") }}>Academics</div>
            <div className="flex flex-col border m-1 p-2" onClick={(e) => { changeTab(e, "specifics") }}>Specifics</div>
          </div>
          {/* <OptionComponent isVisible={studentDetails} value={'grade_studentDetails'} ></OptionComponent> */}
          {!studentDetails ? <></> :
            <div>
              <label htmlFor="name">Name </label>
              <input type="text" {...formik.getFieldProps('studentDetails.f_name')} />
              <input type="text" {...formik.getFieldProps('studentDetails.m_name')} />
              <input type="text" {...formik.getFieldProps('studentDetails.l_name')} />
            </div>
          }
          <OptionComponent isVisible={qualities} value={'grade_qualities'} ></OptionComponent>
          <OptionComponent isVisible={subject} value={'grade_subjects'} ></OptionComponent>
          <OptionComponent isVisible={intrests} value={'grade_intrests'} ></OptionComponent>
          {/* <OptionComponent isVisible={specifics} value={'grade_specifics'} ></OptionComponent> */}
        </div>
        <div className="flex flex-col mr-20 border p-10">All students
          {students?.map((student) => {
            return (<>

              <div className="p-1 m-2 border" key={student.student_id} onClick={(e) => {
                e.preventDefault();
                setSelected(student);
                formData = {
                  studentDetails: {
                    student_id: selected._id,
                    bg_id: selected.bg_id,
                    grade: selected.grade,
                    dob: selected.dob,
                    gender: selected.gender,
                    f_name: selected.f_name,
                    m_name: selected.m_name,
                    l_name: selected.l_name
                  },
                  qualities: {},
                  subjects: {},
                  intrests: {},
                  specifics: {}
                }
              }}>

                <p className="text-blue-700"> {student.f_name} {student.m_name} {student.l_name}</p>
              </div>
            </>

            )
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params: { bg_id } }) {

  const bg_data = await fetch(`${baseUrl}/api/balgurukul/${bg_id}`)
  const stdnt = await fetch(`${baseUrl}/api/student/bg/${bg_id}`)
  const bg = await bg_data.json()
  const stdn = await stdnt.json()
  console.log(stdn);
  return {
    props: {
      bg,
      students: stdn,
    },
  }
}

export default CreateGrade;
