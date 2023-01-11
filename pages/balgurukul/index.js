import Link from 'next/link'
import baseUrl from "../../helpers/baseUrl"
import styles from '../../styles/BgIndex.module.css'
import { useState, useEffect } from 'react'



export default function BG({ BG }) {

  const [allBG, setAllBG] = useState(BG)
  const [filterd, setFilterd] = useState(allBG)
  const [state, setState] = useState("");
  const [name, setName] = useState("");


  //implement filter update bg cards
  useEffect(() => {
    if (state || name) {
      let filteredData = allBG.filter((bg) => {
        return bg.state_short.includes(state)             //------------filter state
      })
      filteredData = filteredData.filter((bg) => {
        return bg.bg_name.toLowerCase().includes(name.toLowerCase())       //----------filter name
      })
      setFilterd(filteredData)
    } else {                                             //-------------if no filter show all bg
      setFilterd(allBG)
    }

  }, [state, name]);

                      //---------cards displayed
  let bgkList = filterd.map(bg => {
    return (
      <div className={styles.card} key={bg.bg_id} >
        {/* <img src="..." class="card-img-top" alt="..."/> */}
        <div className="card-body">
          <h5 className={ styles.card_title }>{bg.bg_name}</h5>
          <p className="card-text">{bg.state}</p>
          <p className="card-text">{bg.state_short}</p>

          {/* --------------------get every bg detail----------------- */}
          <Link href={'/balgurukul/[id]'} as={`/balgurukul/${bg.bg_id}`} className="btn btn-primary">Know More</Link>
        </div>
      </div>
    )
  })
  return (
    <>
      <div className={styles.filter}>
        <input className={styles.filter_name} type="text" placeholder='Search by Name' value={name} onChange={(e) => {
          setName(e.target.value);
        }} />
        <select className={styles.filter_state}
          id="state"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          <option value="">SELECT STATE</option>
          <option value="AN">Andaman and Nicobar Islands</option>
          <option value="AP">Andhra Pradesh</option>
          <option value="AR">Arunachal Pradesh</option>
          <option value="AS">Assam</option>
          <option value="BR">Bihar</option>
          <option value="CH">Chandigarh</option>
          <option value="CT">Chhattisgarh</option>
          <option value="DN">Dadra and Nagar Haveli</option>
          <option value="DD">Daman and Diu</option>
          <option value="DL">Delhi</option>
          <option value="GA">Goa</option>
          <option value="GJ">Gujarat</option>
          <option value="HR">Haryana</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="JH">Jharkhand</option>
          <option value="KA">Karnataka</option>
          <option value="KL">Kerala</option>
          <option value="LA">Ladakh</option>
          <option value="LD">Lakshadweep</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="MH">Maharashtra</option>
          <option value="MN">Manipur</option>
          <option value="ML">Meghalaya</option>
          <option value="MZ">Mizoram</option>
          <option value="NL">Nagaland</option>
          <option value="OR">Odisha</option>
          <option value="PY">Puducherry</option>
          <option value="PB">Punjab</option>
          <option value="RJ">Rajasthan</option>
          <option value="SK">Sikkim</option>
          <option value="TN">Tamil Nadu</option>
          <option value="TA">Telangana</option>
          <option value="TR">Tripura</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="UT">Uttarakhand</option>
          <option value="WB">West Bengal</option>
        </select>

        <button className={ styles.Rbtn } name='Reset' onClick={() => { setState("");  setName("")}}>Reset Filters</button>
      </div>
      <div className="rootcard">
        {bgkList}
      </div>
    </>
  )
}


//-------------------get all bg from db api
export async function getServerSideProps() {
  let res = await fetch(baseUrl + "/api/balgurukul/")
  const data = await res.json();
  return {
    props: {
      BG: data
    }
  }
}