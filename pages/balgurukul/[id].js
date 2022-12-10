import Link from 'next/link'
import baseUrl from '../../helpers/baseUrl'
const Product =({balgurukul})=>{
    return(

        //--------------individual page design begins here-----------------
        <div className = "container center-align">
            <h2>{balgurukul.bg_name}</h2><br/>
            <h5>Partnering Organization: {balgurukul.partnering_org}</h5><br/>  
            <h5>Address</h5>
            {balgurukul.address}<br/>  
            {balgurukul.district}<br/>  
            {balgurukul.state}<br/>  
            {balgurukul.pincode}<br/><br/>

            <h5>Management</h5>
            {balgurukul.org_under_bg == "nan"? '-':balgurukul.org_under_bg}<br/>
               { balgurukul.phone == "nan"? '-':balgurukul.phone}<br/>
               Email: {balgurukul.mail == "nan"? '---':<Link href={`mailto:${balgurukul.mail}`}>{balgurukul.mail}</Link>}<br/>
        </div> 
    )
}

//--------------------------get all the data from api of that bgk------------------
export async function getServerSideProps({params:{id}}){
   const res = await fetch(`${baseUrl}/api/balgurukul/${id}`)
    const data = await res.json()
    console.log(data);
    return{
        props:{balgurukul:data[0]},
    }
}

export default Product