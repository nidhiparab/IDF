import React from 'react';
import baseUrl from '../../../helpers/baseUrl';
import gradeConstants from '../../../lib/grades';
import styles from '../../../styles/Grade.module.css';
import { useState } from 'react';
import { useFormik, Field, FormikProvider } from 'formik';


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
        student_id: selected.student_id,
        bg_id: selected.bg_id,
        exam: '',
        f_name: selected.f_name,
        m_name: selected.m_name,
        l_name: selected.l_name,
        dob: selected.dob,
        gender: selected.gender,
        grade: selected.grade,
      },
      grade_qualities: {
        Q1: 'O7',
        Q2: 'O7',
        Q3: 'O7',
        Q4: 'O7',
        Q5: 'O7',
        Q6: 'O7',
        Q7: 'O7',
        Q8: 'O7',
        Q9: 'O7',
        Q10: 'O7',
        Q11: 'O7',
        Q12: 'O7'
      },
      grade_subjects: {
        Q1: 'O9',
        Q2: 'O9',
        Q3: 'O9',
        Q4: 'O9',
        Q5: 'O9'
      },
      grade_intrests: {
        Q1: 'O7',
        Q2: 'O7',
        Q3: 'O7',
        Q4: 'O7',
        Q5: 'O7',
        Q6: 'O7',
        Q7: 'O7',
        Q8: 'O7',
        Q9: 'O7',
      },
      grade_specifics: {
        Q1: '',
        Q2: '',
        Q3: ''
      }
    },
    onSubmit: async (values) => {
      let grade_qualities = []
      let grade_subjects = []
      let grade_intrests = []
      let grade_specifics = []

      for (const [key, value] of Object.entries(values.grade_qualities)) {
        grade_qualities.push(value)
      }
      for (const [key, value] of Object.entries(values.grade_subjects)) {
        grade_subjects.push(value)
      }
      for (const [key, value] of Object.entries(values.grade_intrests)) {
        grade_intrests.push(value)
      }
      for (const [key, value] of Object.entries(values.grade_specifics)) {
        grade_specifics.push(value)
      }

      let res = await fetch(`${baseUrl}/api/student/grade/insert`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          student_id: values.studentDetails.student_id,
          bg_id: values.studentDetails.bg_id,
          exam: values.studentDetails.exam,
          grade: values.studentDetails.grade,
          grade_qualities,
          grade_subjects,
          grade_intrests,
          grade_specifics
        })
      })
      let data = await res.json();
      console.log(data);
    }
  });


  function changeTab(e, tab) {
    e.preventDefault();
    setStudentDetails(tab == 'studentDetails' ? true : false);
    setQualities(tab == 'qualities' ? true : false);
    setSubject(tab == 'subjects' ? true : false);
    setIntrests(tab == 'intrests' ? true : false);
    setSpecifics(tab == 'specifics' ? true : false);
  }



  return (
    <FormikProvider value={formik}>

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
        <form onSubmit={formik.handleSubmit}>
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
                <input type="text" hidden {...formik.getFieldProps('studentDetails.student_id')} />
                <input type="text" hidden {...formik.getFieldProps('studentDetails.bg_id')} />
                <label htmlFor="name">Exam </label>
                <br />
                <input type="text" {...formik.getFieldProps('studentDetails.exam')} />
                <br />
                <label htmlFor="name">Name </label>
                <br />
                <input type="text" {...formik.getFieldProps('studentDetails.f_name')} />
                <br />
                <br />
                <input type="text" {...formik.getFieldProps('studentDetails.m_name')} />
                <br />
                <br />
                <input type="text" {...formik.getFieldProps('studentDetails.l_name')} />
                <br />
                <label htmlFor="grade">Grade</label>
                <br />
                <input type="text" {...formik.getFieldProps('studentDetails.grade')} />
                <br />
                <label htmlFor="dob">DOB</label>
                <br />
                <input type="text" {...formik.getFieldProps('studentDetails.dob')} />
                <br />
                <label htmlFor="gender">Gender</label>
                <br />
                <input type="text" {...formik.getFieldProps('studentDetails.gender')} />
                <br />
                <button onClick={(e) => { e.preventDefault(); setStudentDetails(false); setQualities(true) }}>
                  Next
                </button>
              </div>
            }
            {(() => {
              if (!qualities)
                return (<></>)
              else {
                let obj = 'grade_qualities'
                let gradeOptions = gradeConstants[obj];
                let columns = gradeOptions.columns;
                let grade_opt = gradeOptions.options;
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
                              console.log("name, value, some");
                              console.log(key_col, key_opt, value);
                              return (
                                <li key={key_opt}>
                                  <Field type="radio" name={`${obj}.${key_col}`} value={key_opt}>
                                  </Field>

                                  <label htmlFor={key_col}>{grade_opt[key_opt]} </label>
                                </li>)
                            })}
                          </ul>
                        </div>

                      </div>)
                    })}
                    <button onClick={(e) => { e.preventDefault(); setQualities(false); setSubject(true) }}>
                      Next
                    </button>
                  </div>
                )
              }
            })()}

            {(() => {
              if (!subject)
                return (<></>)
              else {
                let obj = 'grade_subjects'
                let gradeOptions = gradeConstants[obj];
                let columns = gradeOptions.columns;
                let grade_opt = gradeOptions.options;
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
                              console.log("name, value, some");
                              console.log(key_col, key_opt, value);
                              return (
                                <li key={key_opt}>
                                  <Field type="radio" name={`${obj}.${key_col}`} value={key_opt}>
                                  </Field>

                                  <label htmlFor={key_col}>{grade_opt[key_opt]} </label>
                                </li>)
                            })}
                          </ul>
                        </div>

                      </div>)
                    })}
                    <button onClick={(e) => { e.preventDefault(); setSubject(false); setIntrests(true) }}>
                      Next
                    </button>
                  </div>
                )
              }
            })()}
            {(() => {
              if (!intrests)
                return (<></>)
              else {
                let obj = 'grade_intrests'
                let gradeOptions = gradeConstants[obj];
                let columns = gradeOptions.columns;
                let grade_opt = gradeOptions.options;
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
                              console.log("name, value, some");
                              console.log(key_col, key_opt, value);
                              return (
                                <li key={key_opt}>
                                  <Field type="radio" name={`${obj}.${key_col}`} value={key_opt}>
                                  </Field>

                                  <label htmlFor={key_col}>{grade_opt[key_opt]} </label>
                                </li>)
                            })}
                          </ul>
                        </div>

                      </div>)
                    })}
                    <button onClick={(e) => { e.preventDefault(); setIntrests(false); setSpecifics(true) }}>
                      Next
                    </button>

                  </div>
                )
              }
            })()}
            {/* <OptionComponent isVisible={specifics} value={'grade_specifics'} ></OptionComponent> */}
            {!specifics ? <></> :
              <div>
                <label htmlFor="Q1">Is there any specific or extraordinary talent / quality in the child? Please specify. </label>
                <br />
                <input type="textarea" {...formik.getFieldProps('grade_specifics.Q1')} />
                <br />
                <label htmlFor="grade">Is there any specific or unusual challenge or problem faced by the child? Kindly explain.</label>
                <br />
                <input type="textarea" {...formik.getFieldProps('grade_specifics.Q2')} />
                <br />
                <label htmlFor="grade">Any specific action plan or suggestion with regard to the child? Please share.</label>
                <br />
                <input type="textarea" {...formik.getFieldProps('grade_specifics.Q3')} />
                <br />
                <button type='submit'>
                  Submit
                </button>
              </div>
            }
          </div>
        </form>
        <div className="flex flex-col mr-20 border p-10">All students
          {students?.map((student) => {
            return (<>

              <div className="p-1 m-2 border" key={student.student_id} onClick={(e) => {
                e.preventDefault();
                setSelected(student);
                formik.setFieldValue('studentDetails.student_id', student.student_id);
                formik.setFieldValue('studentDetails.bg_id', student.bg_id);
                formik.setFieldValue('studentDetails.f_name', student.f_name);
                formik.setFieldValue('studentDetails.m_name', student.m_name);
                formik.setFieldValue('studentDetails.dob', student.dob);
                formik.setFieldValue('studentDetails.grade', student.grade);
              }}>

                <p className="text-blue-700"> {student.f_name} {student.m_name} {student.l_name}</p>
              </div>
            </>

            )
          })}



        </div>
      </div>
    </FormikProvider>
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
