import baseUrl from '../../helpers/baseUrl';
import React from 'react';
import student from '../profile/student/[student_id]';
import printStyles from '../../styles/Print.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/idf-logo.png'

const GradeId = ({ grade }) => {
  // console.log(grade.grade_subjects);
  return (
    <>

      <div className={`bg-blue-600 flex justify-center text-center h-60 ${printStyles.no_print}`}>
        <span className='m-auto text-5xl text-white font-extrabold'>Student{`'`}s Details</span>
      </div>
      <div className={`flex flex-col ${printStyles.header}`} >
        <div className={`flex flex-row justify-center `}>
          <Link className="flex flex-col m-2" href="https://www.idf.org.in" passHref>
            <Image
              className="w-16 h-20 "
              src={logo}
              alt="idf-logo.png"
            />
          </Link>
          <div className="flex flex-col ">
            <h1 className="flex flex-row m-0 font-bold">Indian Development Foundation</h1>
            <p className="flex flex-row m-0 text-sm">
              A National NGO committed to Health, Education, and Development
            </p>
            <p className="flex flex-row text-sm">
              IDF - Organization in Special Consultative Status with the Economic and Social
              Council since 2012.
            </p>
          </div>
        </div>
      </div>
      <div className={printStyles.padd1} ></div>

      <div className={`m-20 p-10 items-center shadow-xl shadow-slate-300 rounded-2xl ${printStyles.no_shadow}`}>
        <div className=' text-2xl'>
          <div className='justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Name</h3>
            <span className='mt-auto mb-2'>{grade?.f_name} {grade?.m_name} {grade?.l_name}</span>
          </div>
          <div className='justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Balgurukul</h3>
            <span className='mt-auto mb-2'>{grade?.bg_name}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Class</h3>
            <span className='mt-auto mb-2'>{grade?.grade}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>DOB</h3>
            <span className='mt-auto mb-2'>{grade.dob}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Gender</h3>
            <span className='mt-auto mb-2'>{grade?.gender}</span>
          </div>
        </div>
      </div>
      <div className={printStyles.padd2} ></div>
      <div className={`m-20 p-10 items-center shadow-xl shadow-slate-300 rounded-2xl ${printStyles.no_shadow} `}>
        <h1 className='text-center font-bold text-blue-600 text-justify ' >Student{`'`}s Qualities and Abilities</h1>
        <table className="table-auto w-full text-left mt-4">
          <thead className="bg-gray-800 text-black">
            <tr className="bg-blue-400 font-bold text-center ">
              <th className="px-4 py-2">Quality</th>
              <th className="px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(grade.grade_qualities).map(function (key) {
              let value = grade.grade_qualities[key];
              return (
                <tr className="bg-white " key={key}>
                  <td className="border px-4 py-2  font-bold">{key}</td>
                  <td className="border px-4 py-2">{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={printStyles.padd3} ></div>
      <div className={`m-20 p-10 items-center shadow-xl shadow-slate-300 rounded-2xl ${printStyles.no_shadow} `}>
        <h1 className='text-center font-bold text-blue-600 text-justify' > Subject Knowledge - Based on previous exam or the teacher{`'`}s observation</h1>
        <table className="table-auto w-full text-left mt-4">
          <thead className="bg-gray-800 text-black">
            <tr className="bg-blue-400 font-bold text-center ">
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(grade.grade_subjects).map(function (key) {
              let value = grade.grade_subjects[key];
              return (
                <tr className="bg-white " key={key}>
                  <td className="border px-4 py-2  font-bold">{key}</td>
                  <td className="border px-4 py-2">{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={printStyles.padd4} ></div>
      <div className={`m-20 p-10 items-center shadow-xl shadow-slate-300 rounded-2xl ${printStyles.no_shadow} `}>     <h1 className='text-center font-bold text-blue-600' >Interest and involvement in Co-curricular Activities</h1>
        <table className="table-auto w-full text-left mt-4">
          <thead className="bg-gray-800 text-black">
            <tr className="bg-blue-400 font-bold text-center ">
              <th className="px-4 py-2">Activity</th>
              <th className="px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(grade.grade_intrests).map(function (key) {
              let value = grade.grade_intrests[key];
              return (
                <tr className="bg-white " key={key}>
                  <td className="border px-4 py-2  font-bold">{key}</td>
                  <td className="border px-4 py-2">{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={printStyles.padd5} ></div>
      <div className={`m-20 p-10 items-center shadow-xl shadow-slate-300 rounded-2xl ${printStyles.no_shadow} `}>
        <h1 className='text-center font-bold text-blue-600' >Specifics</h1>

        <table className="table-auto w-full text-left mt-4">
          <thead className="bg-gray-800 text-black">
            <tr className="bg-blue-400 font-bold text-center ">
              <th className="px-4 py-2">Specific</th>
              <th className="px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(grade.grade_specifics).map(function (key) {
              let value = grade.grade_specifics[key];
              return (
                <tr key={key} className="bg-white ">
                  <td className="border px-4 py-2  font-bold">{key}</td>
                  <td className="border px-4 py-2 w-3/5">{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>


      </div>
      <div className={`m-20 p-10 items-center border-4 border-solid rounded-2xl ${printStyles.no_shadow} ${printStyles.no_print} `}>
        <h1 className='text-center font-bold text-blue-600 cursor-pointer ' onClick={() => { window.print() }} >Print</h1>
      </div>


    </>

  );
}

export async function getServerSideProps({ params: { grade_id } }) {
  const res = await fetch(`${baseUrl}/api/student/grade/${grade_id}`)
  const data = await res.json()
  return {
    props: {
      grade: data.result[0],
    },
  }
}

export default GradeId;


