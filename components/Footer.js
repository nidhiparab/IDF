import Link from 'next/link';

const Footer = () =>{
    return(
        <div className="footer">
        <div className="top">

            <div>
                <h1>IDF</h1>
                <p>This is the Footer.</p>
            </div>
            {/* <div>
                <a href="/">
                <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                 <i className="fab fa-instagram"></i>
                </a>
                <a href="/">
                <i className="fab fa-youtube"></i>
                </a>
                <a href="/">
                <i className="fab fa-twitter"></i>
                </a>
            </div> */}
        </div>





        <div className="bottom">
            
            <div>
                <h4>About us</h4>
                <Link href="/">A</Link>
                <Link href="/">B</Link>
                <Link href="/">C</Link>
                <Link href="/">D</Link>
            </div>

            <div>
                <h4>Others</h4>
                <Link href="/">A</Link>
                <Link href="/">B</Link>
                <Link href="/">C</Link>
                <Link href="/">D</Link>
            </div>

      
        </div>


        </div>
    )
}

export default Footer;