import React from 'react';
import baseUrl from '../../../../helpers/baseUrl';
import gradeConstants from '../../../../lib/grades';
import styles from '../../../../styles/Grade.module.css';
import { useState } from 'react';
import { useFormik, Field, FormikProvider } from 'formik';


const CreateGrade = ({ bg, students, exam }) => {

  const gradeOptions = bg.grade_options
  const [selected, setSelected] = useState(students[0]);
  const [qualities, setQualities] = useState(true);
  const [subject, setSubject] = useState(false);
  const [intrests, setIntrests] = useState(false);
  const [specifics, setSpecifics] = useState(false);
  const reset = () => {
    formik.resetForm();
    setQualities(true);
    setSubject(false);
    setIntrests(false);
    setSpecifics(false);
    
  }
  const formik = useFormik({
    initialValues: {
      grades: {
        grade_qualities: {
          Q1: '',
          Q2: '',
          Q3: '',
          Q4: '',
          Q5: '',
          Q6: '',
          Q7: '',
          Q8: '',
          Q9: '',
          Q10: '', // O7
          Q11: '',
          Q12: ''
        },
        grade_subjects: {
          Q1: '', // O9
          Q2: '',
          Q3: '',
          Q4: '',
          Q5: ''
        },
        grade_intrests: {
          Q1: '', // O7
          Q2: '',
          Q3: '',
          Q4: '',
          Q5: '',
          Q6: '',
          Q7: '',
          Q8: '',
          Q9: '',
        },
        grade_specifics: {
          Q1: '', // ''
          Q2: '',
          Q3: ''
        }
      }
    },
    validate: (values) => {
      const errors = {grades:{grade_qualities:{}, grade_subjects:{}, grade_intrests:{}, grade_specifics:{}}};
      
      for (const [key, value] of Object.entries(values.grades.grade_qualities)) {
        if(value === '') errors.grades.grade_qualities[key] = 'Required'
      }
      
      for (const [key, value] of Object.entries(values.grades.grade_subjects)) {
        if(value === '') errors.grades.grade_subjects[key] = 'Required'
      }
      
      for(const [key, value] of Object.entries(values.grades.grade_intrests)){
        if(value === '') errors.grades.grade_intrests[key] = 'Required'
      }
      
      
      if(values.grades.grade_specifics.Q1 === ''){
        errors.grades.grade_specifics.Q1 = 'Required'
      }
      if(values.grades.grade_specifics.Q2 === ''){
        errors.grades.grade_specifics.Q2 = 'Required'
      }
      if(values.grades.grade_specifics.Q3 === ''){
        errors.grades.grade_specifics.Q3 = 'Required'
      }
      return errors;
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

      let res = await fetch(`${baseUrl}/api/student/grade/ins`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          student_id: selected.student_id,
          bg_id: selected.bg_id,
          exam: exam,
          grade: selected.grade,
          grades: values.grades
        })
      })
      if(res.error){
        alert(res.error)
      }else{
        alert("Submitted")
        reset()
      }
      let data = await res.json();
    }
  });


  function changeTab(e, tab) {
    e.preventDefault();
    setQualities(tab == 'qualities');
    setSubject(tab == 'subjects');
    setIntrests(tab == 'intrests');
    setSpecifics(tab == 'specifics');
  }



  return (
    <FormikProvider value={formik}>
      <div className='bg-blue-600 flex justify-center text-center h-60'>
        <span className='m-auto text-5xl text-white font-extrabold'>Evaluation for {exam}</span>
      </div>

      <div className="flex flex-row justify-content-center m-5 w-auto">
        <div className="flex flex-col p-20 shadow-xl shadow-slate-100 hover:shadow-slate-700 rounded-xl">
          <h3 className="font-extrabold text-blue-600 text-center justify-center">Student</h3>
          <div>
            {!selected ? <></> : <>
              <div className="">
                <h1 className="text-blue-700">
                  {selected.f_name} {selected.m_name} {selected.l_name}
                </h1>
                <div>
                  <h2 className="text-blue-600 text-2xl">{selected.grade}
                  </h2>

                  <h2 className="text-blue-600 text-2xl">{selected.dob}
                  </h2>

                  <h2 className="text-blue-600 text-2xl">{selected.gender}
                  </h2>
                </div>
              </div>

            </>
            }
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col p-20 pt-10 shadow-xl shadow-slate-100 hover:shadow-slate-700 rounded-xl  w-auto">
            <h3 className="font-extrabold text-blue-600 text-center justify-center">Sections</h3>


            <div className="flex flex-row  ">
              <div className={qualities ? "flex flex-col border m-1 p-2 font-semibold rounded-xl text-sm  bg-blue-600 text-white " : "flex flex-col border m-1 p-2 font-semibold rounded-xl text-sm"} onClick={(e) => { changeTab(e, "qualities") }}>Qualities</div>
              <div className={subject ? "flex flex-col border m-1 p-2 font-semibold rounded-xl text-sm  bg-blue-600 text-white " : "flex flex-col border m-1 p-2 font-semibold rounded-xl text-sm"} onClick={(e) => { changeTab(e, "subjects") }}>Academics</div>
              <div className={intrests ? "flex flex-col border m-1 p-2 font-semibold rounded-xl text-sm  bg-blue-600 text-white " : "flex flex-col border m-1 p-2 font-semibold rounded-xl text-sm"} onClick={(e) => { changeTab(e, "intrests") }}>Intrests</div>
              <div className={specifics ? "flex flex-col border m-1 p-2 font-semibold rounded-xl text-sm  bg-blue-600 text-white " : "flex flex-col border m-1 p-2 font-semibold rounded-xl text-sm"} onClick={(e) => { changeTab(e, "specifics") }}>Specifics</div>
            </div>
            {/* <OptionComponent isVisible={studentDetails} value={'grade_studentDetails'} ></OptionComponent> */}

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
                        <h4 className="text-blue-600 font-bold text-lg">{value}</h4>
                        { formik.errors.grades?.[obj]?.[key_col] && formik.touched.grades?.[obj]?.[key_col] ? <div className="text-red-500">{formik.errors.grades[obj][key_col]}</div> : null}
                        <div className="border-2 hover:border-blue-600 p-1">
                          <div className={styles.radio_toolbar}>
                            {Object.keys(grade_opt).map((key_opt) => {
                              return (
                                <>
                                  <Field key={`${obj}.${key_opt}`} type="radio" id={`grades.${obj}.${key_col}.${key_opt}`} name={`grades.${obj}.${key_col}`} value={key_opt} />
                                  <label key={`${obj}.${key_opt}l`} htmlFor={`grades.${obj}.${key_col}.${key_opt}`}>{grade_opt[key_opt]} </label>
                                </>)
                            })}
                          </div>
                        </div>

                      </div>)
                    })}
                    <button className="border-2 mt-5 border-blue-200 w-full hover:bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-3 hover:text-gray-50 text-lg" onClick={(e) => { e.preventDefault(); setQualities(false); setSubject(true) }}>
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
                    <div>
                      <h5>Grades for Subjects </h5>
                      <div>
                        {Object.keys(grade_opt).map((key_opt) => {
                          return (<h6 key={grade_opt[key_opt]}>{grade_opt[key_opt]}</h6>)
                        })}
                      </div>
                    </div>

                    {Object.keys(columns).map((key_col) => {
                      let value = columns[key_col];
                      return (<div key={key_col}>
                        <br />
                        <br />
                        <h4 className="text-blue-600 font-bold text-lg">{value}</h4>
                        { formik.errors.grades?.[obj]?.[key_col] && formik.touched.grades?.[obj]?.[key_col] ? <div className="text-red-500">{formik.errors.grades[obj][key_col]}</div> : null}
                        <div className="border-2 hover:border-blue-600 p-1">
                          <div className={styles.radio_toolbar}>
                            {Object.keys(grade_opt).map((key_opt) => {
                              return (
                                <>
                                  <Field key={`${obj}.${key_opt}`} type="radio" id={`grades.${obj}.${key_col}.${key_opt}`} name={`grades.${obj}.${key_col}`} value={key_opt} >

                                  </Field>
                                  <label key={`${obj}.${key_opt}l`} htmlFor={`grades.${obj}.${key_col}.${key_opt}`}>{grade_opt[key_opt].split(" (")[0]} </label>
                                </>)
                            })}
                          </div>
                        </div>

                      </div>)
                    })}
                    <button className="border-2 mt-5 border-blue-200 w-full hover:bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-3 hover:text-gray-50 text-lg" onClick={(e) => { e.preventDefault(); setSubject(false); setIntrests(true) }}>
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
                        <h4 className="text-blue-600 font-bold text-lg">{value}</h4>
                        { formik.errors.grades?.[obj]?.[key_col] && formik.touched.grades?.[obj]?.[key_col] ? <div className="text-red-500">{formik.errors.grades[obj][key_col]}</div> : null}
                        <div className="border-2 hover:border-blue-600 p-1">
                          <div className={styles.radio_toolbar}>
                            {Object.keys(grade_opt).map((key_opt) => {
                              return (
                                <>
                                  <Field key={`${obj}.${key_opt}`} type="radio" id={`grades.${obj}.${key_col}.${key_opt}`} name={`grades.${obj}.${key_col}`} value={key_opt} >

                                  </Field>
                                  <label key={`${obj}.${key_opt}l`} htmlFor={`grades.${obj}.${key_col}.${key_opt}`}>{grade_opt[key_opt]} </label>
                                </>)
                            })}
                          </div>
                        </div>

                      </div>)
                    })}
                    <button className="border-2 mt-5 border-blue-200 w-full hover:bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-3 hover:text-gray-50 text-lg" onClick={(e) => { e.preventDefault(); setIntrests(false); setSpecifics(true) }}>
                      Next
                    </button>

                  </div>
                )
              }
            })()}
            {/* <OptionComponent isVisible={specifics} value={'grade_specifics'} ></OptionComponent> */}
            {!specifics ? <></> :
              <div>
                <label className="text-blue-600 font-bold text-lg pt-4" htmlFor="Q1">Is there any specific or extraordinary talent / quality in the child? Please specify. </label>

                <input className="bg-white  focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="textarea" {...formik.getFieldProps('grades.grade_specifics.Q1')} />
                { formik.errors?.grades?.grade_specifics?.Q1 && formik.touched?.grades?.grade_specifics?.Q1 ? <div className="text-red-500">{formik.errors.grades.grade_specifics.Q1}</div> : null}
                <label className="text-blue-600 font-bold text-lg pt-4" htmlFor="grade">Is there any specific or unusual challenge or problem faced by the child? Kindly explain.</label>

                <input className="bg-white focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="textarea" {...formik.getFieldProps('grades.grade_specifics.Q2')} />
                { formik.errors?.grades?.grade_specifics?.Q2 && formik.touched?.grades?.grade_specifics?.Q2 ? <div className="text-red-500">{formik.errors.grades.grade_specifics.Q2}</div> : null}

                <label className="text-blue-600 font-bold text-lg pt-4" htmlFor="grade">Any specific action plan or suggestion with regard to the child? Please share.</label>

                <input className="bg-white focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="textarea" {...formik.getFieldProps('grades.grade_specifics.Q3')} />
                { formik.errors?.grades?.grade_specifics?.Q3 && formik.touched?.grades?.grade_specifics?.Q3 ? <div className="text-red-500">{formik.errors.grades.grade_specifics.Q3}</div> : null}
                <br />
                <button className="border-2 border-blue-200 w-full hover:bg-emerald-600 rounded-md py-3 hover:text-gray-50 text-lg" type='submit'>
                  Submit
                </button>
              </div>
            }
          </div>
        </form>
        <div className="flex flex-col p-10 w-3/12 shadow-xl shadow-slate-100 hover:shadow-slate-700 rounded-xl">
          <h3 className="font-extrabold text-blue-600 text-center justify-center">All students</h3>
          <div className="overflow-y-auto h-30">
            {students?.map((student) => {
              return (
                <div className="p-2 mb-2 bg-yellow-100  hover:bg-yellow-200 rounded-xl w-11/12 " key={student.student_id} onClick={(e) => {
                  e.preventDefault();
                  setSelected(student);
                  reset()
                }}>
                  <p className="text-blue-700 font-semibold text-center"> {student.f_name} {student.m_name} {student.l_name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </FormikProvider>
  );
}

export async function getServerSideProps({ params: { bg_id, exam } }) {

  const bg_data = await fetch(`${baseUrl}/api/balgurukul/${bg_id}`)
  const stdnt = await fetch(`${baseUrl}/api/student/bg/${bg_id}`)
  const bg = await bg_data.json()
  const stdn = await stdnt.json()
  if (stdn.length == 0) {
    return {
      redirect: {
        permanent: false,
        destination: "/balgurukul/" + bg_id,
      },
      props: {},
    };
  }
  return {
    props: {
      bg,
      students: stdn,
      exam
    },
  }
}

export default CreateGrade;
