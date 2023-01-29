import React from 'react';
import baseUrl from '../../../helpers/baseUrl';
import gradeConstants from '../../../lib/grades';
import {useState} from 'react';

const CreateGrade = ({ bg, students }) => {
  
  const [selected, setSelected] = useState(null);
  
  
  
  return (
    <>
    <div className="flex flex-row justify-between m-5">
               <div className="flex flex-col p-20 border">Student
               <div>
               {!selected?<></>:<>
                <div className="">
                <h1 className="text-blue-700">
                {selected.f_name} {selected.m_name} {selected.l_name}
                </h1>
                <p>
                {selected.grade}<br/>
                {selected.gender}
                </p>
                </div>
                
                </>
            }
               </div>
               </div>
               <div className="flex flex-col border pl-20 pr-20">Questions
               <div className="flex flex-row">
               <div className="flex flex-col border m-1 p-2">question 1</div>
               <div className="flex flex-col border m-1 p-2">question 2</div>
               <div className="flex flex-col border m-1 p-2">question 3</div>
               <div className="flex flex-col border m-1 p-2">question 4</div>
               <div className="flex flex-col border m-1 p-2">question 5</div>
               
               </div>
               
               </div>
               <div className="flex flex-col mr-20 border p-10">All students
      {students?.map((student)=>{
        return(<>
               
               <div className="p-1 m-2 border" onClick={(e)=>{e.preventDefault();
                                   setSelected(student);}}>
               
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
