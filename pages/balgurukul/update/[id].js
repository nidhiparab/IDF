import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import baseUrl from '../../../helpers/baseUrl';

const Update = ({ balgurukul }) => {
  //---------------------------all required fields------------------
  const [bg_name, setName] = useState(balgurukul.bg_name);
  const [partnering_org, setPartner] = useState(balgurukul.partnering_org);
  const [district, setDist] = useState(balgurukul.district);
  const [state, setState] = useState(balgurukul.state);
  const [region, setRegion] = useState(balgurukul.region);
  const [pincode, setPin] = useState(balgurukul.pincode);
  const [org_under_bg, setOu] = useState(balgurukul.org_under_bg);
  const [mob, setMob] = useState(balgurukul.phone.split('/')[0]);
  const [tel, setTel] = useState(balgurukul.phone.split('/')[1]);
  const [phone, setPh] = useState('');
  const [mail, setMail] = useState(balgurukul.mail);
  const router = useRouter()
  const handleSubmit = async (e) => {
  console.log(state);

    //----------------set phone number mobile + telephone
    setPh(mob + '/' + tel);
    e.preventDefault();
    let bg_id = balgurukul.bg_id
    let soft_delete = balgurukul.soft_delete
    let state_short = balgurukul.state_short
    const res = await fetch(`${baseUrl}/api/balgurukul/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bg_id,
        bg_name,
        partnering_org,
        state,
        state_short,
        district,
        region,
        pincode,
        org_under_bg,
        phone,
        mail,
        soft_delete
      })
    })
    const res2 = await res.json()              //------------------show error
    if (res2.error) {
      console.log(res2.error)
    } else {
      router.push(`/balgurukul/${bg_id}`)
      console.log("Success")

    }
  }

  // console.log(bg_name, partnering_org, state, district, region, pincode, org_under_bg, phone, mail);

  return (
    <form className="container_crt" onSubmit={(e) => handleSubmit(e)}>
      <br />
      <br />
      <h4 className='det'>Details</h4>
      <input className='det1'
        type="text"
        name="bg_name"
        placeholder="Balgurukul Name"
        value={bg_name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <input className='det1'
        type="text"
        name="partnering_org"
        placeholder="Partnering Organization"
        value={partnering_org}
        onChange={(e) => {
          setPartner(e.target.value);
        }}
      />
      <br />
      <br />
      <h4 className='addr'>Address</h4>
      <input className='det1'
        type="text"
        name="district"
        placeholder="District"
        value={district}
        onChange={(e) => {
          setDist(e.target.value);
        }}
      />
      <br />
      <br />
      <input className='det1'
        type="text"
        name="state"
        placeholder="state"
        value={state}
        disabled
      />
      {/* <input type="text" name="state" placeholder="State" value={setState}
            onChange={(e)=>{setState(e.target.value)}}
            /><br/><br/> */}
      
      <br />
      <br />

      <input className='sr'
        type="text"
        name="region"
        placeholder="Region"
        value={region}
        onChange={(e) => {
          setRegion('SR');
        }}
      />
      <br />
      <br />
      <input className='det1'
        type="text"
        name="pincode"
        placeholder="Pin Code"
        value={pincode}
        onChange={(e) => {
          setPin(e.target.value);
        }}
      />
      <br />
      <br />

      <h4 className='Ing'>Incharge</h4>
      <input className='det1'
        type="text"
        name="org_under_bg"
        placeholder="Organization"
        value={org_under_bg}
        onChange={(e) => {
          setOu(e.target.value);
        }}
      />
      <br />
      <br />
      <input className='det1'
        type="text"
        name="mob"
        placeholder="Mobile No."
        value={mob}
        onChange={(e) => {
          setMob(e.target.value);
        }}
      />
      <br />
      <br />
      <input className='det1'
        type="text"
        name="tel"
        placeholder="Telephone No."
        value={tel}
        onChange={(e) => {
          setTel(e.target.value);
        }}
      />
      <br />
      <br />
      <input className='det1'
        type="text"
        name="mail"
        placeholder="Email"
        value={mail}
        onChange={(e) => {
          setMail(e.target.value);
        }}
      />
      <br />
      <br />

      <button type="submit" className='sub-btn'>Submit</button>
    </form>
  );
}

export default Update;



export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${baseUrl}/api/balgurukul/${id}`)
  const data = await res.json()
  return {
    props: { balgurukul: data[0] },
  }
}