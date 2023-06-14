import Link from "next/link";
import React from "react";
import styles from "../../idf/styles/Footer.module.css"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        {/*------------- Social media icons----- */}
        <hr />
        {/* <ul>
                    <p className="text-gray-800 font-bold text-3xl pb-6">
                        Stream<span className="text-blue-600">line</span>
                    </p>
                    <div className="flex gap-6 pb-5">
                        <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                        <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                        <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                        <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                    </div>
                </ul> */}

        <div className={ styles.bottom }>
          <div className={styles.footer_col}>
            <h4>IDF Head Office</h4>
            <span className={ styles.off_address }>
              L 10 / 3 & 4 Jal Ratan Deep, Bangur Nagar, Goregaon (West), Mumbai
              400104. Maharashtra, India.
            </span>

            <span className={ styles.off_address }>
              <br />
              <b>Email:</b>
              <Link href="info@idf.org.in"> info@idf.org.in</Link>
            </span>
            <span className={ styles.off_address }>
              <b>Phone:</b>
              <Link href="tel:+919819131388"> +919819131388</Link>
            </span>
            <span className={ styles.off_address }>
              <b>Registered Charity: </b>F-10540
            </span>
          </div>
          {/* <div className={styles.footer_col}>
            <h4 className={styles.title}>Subscribe to our Newsletter</h4>
            <input
            className={styles.subs_input}
              type="text"
              placeholder="Enter your email here"
              name="subs"
            ></input>
            <br></br>
            <button className={styles.subs}>Subscribe</button>
          </div> */}

          <div className={styles.footer_col}>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
            <Link href="/">Home</Link>
            <Link href="/balgurukul">Balgurukul</Link>
            <Link href="/profile/users">Users</Link>
            <Link href="/profile/students">Students</Link>
            <Link href="/grade">Grades</Link>
            <Link href="https://www.idf.org.in/about-us">About Us</Link>
          </div>
        </div>
      </div>
      <div className={styles.end}>
        <p>
           Copyright © 2023 All Rights Reserved
          <br></br>
          <a href="/copyright">Developed and Designed by Shah & Anchor Kutchhi Engineering College</a>
        </p>
      </div>
    </>
  );
};

export default Footer;

