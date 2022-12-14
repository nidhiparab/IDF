import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import baseUrl from '../../helpers/baseUrl';

const Create = () => {

  //---------------------------all required fields------------------
  const [bg_name, setName] = useState('');
  const [partnering_org, setPartner] = useState('');
  const [district, setDist] = useState('');
  const [state, setState] = useState('');
  const [region, setRegion] = useState('SR');
  const [pincode, setPin] = useState('');
  const [org_under_bg, setOu] = useState('');
  const [mob, setMob] = useState('');
  const [tel, setTel] = useState('');
  const [phone, setPh] = useState(mob + '/' + tel);
  const [mail, setMail] = useState('');
  const router = useRouter()
  const handleSubmit = async (e) => {

    //----------------set phone number mobile + telephone
    setPh(mob + '/' + tel);
    e.preventDefault();

    const res = await fetch(`${baseUrl}/api/balgurukul/getAll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bg_name,
        partnering_org,
        state,
        district,
        region,
        pincode,
        org_under_bg,
        phone,
        mail
      })
    })

    const res2 = await res.json()              //------------------show error
    if (res2.error) {
      console.log(res2.error)
    } else {
      router.push('/balgurukul')
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
			{/* <input type="text" name="state" placeholder="State" value={setState}
            onChange={(e)=>{setState(e.target.value)}}
            /><br/><br/> */}

			<select className='det2'
				id="state"
				name="state"
				value={state}
				onChange={(e) => {
					setState(e.target.value);
				}}
			>     
				<option className='val' value="">SELECT STATE</option>
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
};

export default Create;