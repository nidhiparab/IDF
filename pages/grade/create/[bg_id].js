import React from 'react';
import baseUrl from '../../../helpers/baseUrl';
import gradeConstants from '../../../lib/grades';
import styles from '../../../styles/Grade.module.css';
import { useState } from 'react';

const OptionComponent = ({ options, value, onChange, isVisible }) => {
  let gradeOptions = gradeConstants[value];
  let columns = gradeOptions.columns;
  let grade_opt = gradeOptions.options;
  console.log(columns);
  if (!isVisible) return <></>
  return (
    <div>
      {Object.keys(columns).map((key_col) => {
        let value = columns[key_col];
        return (<>
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
                      checked={grade_opt[key_opt] == "Not Applicable" ? true : false} />
                    <label htmlFor={key_col}>{grade_opt[key_opt]} </label>
                  </li>)
              })}
            </ul>
          </div>
        </>)
      })}
      <br />
    </div>
  )
}

const studentDetails = ({ bg, students, isVisible }) => {

};


const CreateGrade = ({ bg, students }) => {

  const [selected, setSelected] = useState(null);
  const [studentDetails, setStudentDetails] = useState(true);
  const [qualities, setQualities] = useState(false);
  const [subject, setSubject] = useState(false);
  const [intrests, setIntrests] = useState(false);
  const [specifics, setSpecifics] = useState(false);


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
            <div className="flex flex-col border m-1 p-2" onClick={(e) => {
              e.preventDefault();
              setStudentDetails(true);
              setQualities(false);
              setSubject(false);
              setIntrests(false);
              setSpecifics(false)
            }}>Student Details</div>
            <div className="flex flex-col border m-1 p-2" onClick={(e) => {
              e.preventDefault();
              setStudentDetails(false);
              setQualities(true);
              setSubject(false);
              setIntrests(false);
              setSpecifics(false)
            }}>Qualities</div>
            <div className="flex flex-col border m-1 p-2" onClick={(e) => {
              e.preventDefault();
              setStudentDetails(false);
              setQualities(false);
              setSubject(false);
              setIntrests(true);
              setSpecifics(false)
            }}>Intrests</div>
            <div className="flex flex-col border m-1 p-2" onClick={(e) => {
              e.preventDefault();
              setStudentDetails(false);
              setQualities(false);
              setSubject(true);
              setIntrests(false);
              setSpecifics(false)
            }}>Academics</div>
            <div className="flex flex-col border m-1 p-2" onClick={(e) => {
              e.preventDefault();
              setStudentDetails(false);
              setQualities(false);
              setSubject(false);
              setIntrests(false);
              setSpecifics(true)
            }}>Specifics</div>
          </div>
          {/* <OptionComponent isVisible={studentDetails} value={'grade_studentDetails'} ></OptionComponent> */}
          <OptionComponent isVisible={qualities} value={'grade_qualities'} ></OptionComponent>
          <OptionComponent isVisible={subject} value={'grade_subjects'} ></OptionComponent>
          <OptionComponent isVisible={intrests} value={'grade_intrests'} ></OptionComponent>
          {/* <OptionComponent isVisible={specifics} value={'grade_specifics'} ></OptionComponent> */}
        </div>
        <div className="flex flex-col mr-20 border p-10">All students
          {students?.map((student) => {
            return (<>

              <div className="p-1 m-2 border" onClick={(e) => {
                e.preventDefault();
                setSelected(student);
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
