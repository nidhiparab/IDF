import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
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

        <div className="bottom">
          <div className="footer_col">
            <h4>IDF Head Office</h4>
            <span className="off_address">
              L 10 / 3 & 4 Jal Ratan Deep, Bangur Nagar, Goregaon (West), Mumbai
              400104. Maharashtra, India.
            </span>

            <span className="off_address">
              <br />
              <b>Email:</b>
              <Link href="info@idf.org.in"> info@idf.org.in</Link>
            </span>
            <span className="off_address">
              <b>Phone:</b>
              <Link href="tel:+919819131388"> +919819131388</Link>
            </span>
            <span className="off_address">
              <b>Registered Charity: </b>F-10540
            </span>
          </div>
          <div className="footer_col">
            <h4>Subscribe our Newsletter</h4>
            <input
              type="text"
              placeholder="Enter your email here"
              name="subs"
            ></input>
            <br></br>
            <button className="subs">Subscribe</button>
          </div>

          <div className="footer_col">
            <h4>Quick Links</h4>
            <Link href="/">About Us</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Support Us</Link>
            <Link href="/">Events</Link>
          </div>
        </div>
      </div>
      <div className="end">
        <p>
          © 2022 Indian Development Foundation. All rights reserved.
          <br></br>Terms of Use | Privacy Policy
        </p>
      </div>
    </>
  );
};

export default Footer;

