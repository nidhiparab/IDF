import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../../styles/Create.module.css';
import baseUrl from '../../../helpers/baseUrl';

const Update = ({ balgurukul }) => {
  //---------------------------all required fields------------------
  const [bg_name, setName] = useState(balgurukul.bg_name);
  const [partnering_org, setPartner] = useState(balgurukul.partnering_org);
  const [district, setDist] = useState(balgurukul.district);
  const [state, setState] = useState(balgurukul.state);
  const [address, setAddr] = useState(balgurukul.address);
  const [region, setRegion] = useState(balgurukul.region);
  const [pincode, setPin] = useState(balgurukul.pincode);
  const [org_under_bg, setOu] = useState(balgurukul.org_under_bg);
  const [mob, setMob] = useState(balgurukul.phone.split('/')[0]);
  const [tel, setTel] = useState(balgurukul.phone.split('/')[1]);
  const [phone, setPh] = useState('');
  const [mail, setMail] = useState(balgurukul.mail);
  const router = useRouter()
  const handleSubmit = async (e) => {
  console.log(balgurukul)
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
        address,
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
         
    <div className="  mx-auto p-20 items-center shadow-2xl shadow-slate-700 rounded-2xl w-2/3">
    <form action="#" onSubmit={(e) => handleSubmit(e)}>
        
      <h4 className="font-bold">Details</h4>
      <div className=" flex space-x-4  items-center  block text-sm font-medium mb-2">
      <input
          className="inline-block w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
          type="text"
        name="bg_name"
        placeholder="Balgurukul Name"
        value={bg_name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

<input
            className="inline-block w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
        name="partnering_org"
        placeholder="Partnering Organization"
        value={partnering_org}
        onChange={(e) => {
          setPartner(e.target.value);
        }}
      />
      </div>
     

    
      


      
    





{/* --------------------------------------------------------------------------------- */}
 
<h4 className="font-bold">Address</h4>
        <div className=" flex space-x-4  items-center  block text-sm font-medium mb-2">
        <input
            className="inline-block w-full py-3 px-4 my-2  border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
        name="address"
        placeholder="Address"
        value={address}
        onChange={(e) => {
          setAddr(e.target.value);
        }}
      />
      <input
            className="inline-block w-full py-3 px-4 my-2 border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
        name="district"
        placeholder="District"
        value={district}
        onChange={(e) => {
          setDist(e.target.value);
        }}
      />
      </div>
  
      <div className={styles.field_select}>
      <select
           className="inline-block w-full py-3 px-4 my-2  border rounded-xl bg-slate-200 focus:outline-none border-none "
            id="state"
        name="state"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      >
        <option className="val" value="">
          State
        </option>
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
</div>
   
<div className="  flex space-x-4  items-center  block text-sm font-medium mb-2">
        <input
            className="inline-block w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
        name="region"
        placeholder="Region"
        value={region}
        onChange={(e) => {
          setRegion("SR");
        }}
      />
          <input
            className="inline-block w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
        name="pincode"
        placeholder="Pin Code"
        value={pincode}
        onChange={(e) => {
          setPin(e.target.value);
        }}
      />
</div>
     

      {/* ------------------------------------------------------------ */}
      <h4 className="font-bold">Incharge</h4>
        <div className="  flex space-x-4  items-center  block text-sm font-medium mb-2">
        <input
            className="inline-block w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
        name="org_under_bg"
        placeholder="Organization"
        value={org_under_bg}
        onChange={(e) => {
          setOu(e.target.value);
        }}
      />
     <input
            className="inline-block w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
        name="mail"
        placeholder="Email"
        value={mail}
        onChange={(e) => {
          setMail(e.target.value);
        }}
      />
      </div>

   
      <div className="  flex space-x-4  items-center  block text-sm font-medium mb-2">
        <input
            className="inline-block w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
        name="mob"
        placeholder="Mobile No."
        value={mob}
        onChange={(e) => {
          setMob(e.target.value);
        }}
      />
   <input
            className="inline-block w-full py-3 px-4 my-2   border rounded-xl bg-slate-200 focus:outline-none border-none "
            type="text"
        name="tel"
        placeholder="Telephone No."
        value={tel}
        onChange={(e) => {
          setTel(e.target.value);
        }}
      />
</div>
      

    


<button type="submit"  className="items-center  w-full bg-indigo-500 text-white py-2 px-4 my-2 rounded-md hover:bg-indigo-600">
        Submit
      </button>
    </form>




    </div>
  );
}

export default Update;



export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${baseUrl}/api/balgurukul/${id}`)
  const data = await res.json()
  return {
    props: { balgurukul: data },
  }
}