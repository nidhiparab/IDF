import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import styles from '../../styles/Form.module.css';
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import login_validate from '../../lib/validate';
import { useRouter } from 'next/router';
const Register = () => {
  return (
    <>
      <div className="flex h-screen bg-blue-900">
        <div></div>
        <div className="right flex flex-col justify-evenly">
        <div className="text-center py-10">
          <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
              <h1 className="text-gray-800">Explore</h1>
              <p>Loremmipesdfd</p>
            </div>
          </section>
        </div>

        </div>
      </div>
    </>
  );
}

export default Register;
