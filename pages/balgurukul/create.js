import Link from 'next/link';
import { useState } from 'react';
import baseUrl from '../../helpers/baseUrl';
import { Router } from 'next/router';

const Create = () => {
  const [bg_name, setName] = useState('');
  const [partnering_org, setPartner] = useState('');
  const [district, setDist] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState('SR');
  const [pincode, setPin] = useState('');
  const [org_under_bg, setOu] = useState('');
  const [mob, setMob] = useState('#');
  const [tel, setTel] = useState('#');
  const [mail, setMail] = useState('');

  const handleSubmit = async (e) => {
    let phone = mob + '/' + tel
    e.preventDefault();

    if (bg_name == '' ||
      partnering_org == '' ||
      address == '' ||
      state == '' ||
      district == '' ||
      pincode == '' ||
      org_under_bg == '' ||
      mail == '') {
      alert("Please fill all the fields");
      return;
    }


    const res = await fetch(`${baseUrl}/api/balgurukul/add`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bg_name,
        partnering_org,
        address,
        state,
        district,
        region,
        pincode,
        org_under_bg,
        phone,
        mail
      })
    })

    const res2 = await res.json()
    if (res2.error) {
      console.log(res2.error)
    } else {
      console.log("Success")
      Router.push('/balgurukul')
    }
  }

  // console.log(bg_name, partnering_org, state, district, region, pincode, org_under_bg, phone, mail);

  return (
    <form className="container" onSubmit={(e) => handleSubmit(e)}>
      <br />
      <br />
      <h4>Details</h4>
      <input
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
      <input
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
      <h4>Address</h4>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <br />
      <br />
      <input
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
      {/* <input type="text" name="state" placeholder="State" value={setState}
            onChange={(e)=>{setState(e.target.value)}}
            /><br/><br/> */}

      <select
        id="state"
        name="state"
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
      <br />
      <br />

      <input
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
      <input
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

      <h4>Incharge</h4>
      <input
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
      <input
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
      <input
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
      <input
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;