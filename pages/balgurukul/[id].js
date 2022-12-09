import baseUrl from '../../helpers/baseUrl'
const Product =({balgurukul})=>{
    return(

        //--------------individual page design begins here-----------------
        <div>
            <h1>{balgurukul.name}</h1>  
        </div>
    )
}

//--------------------------get all the data from api of that bgk------------------
export async function getServerSideProps({params:{id}}){
   const res = await fetch(`${baseUrl}/api/balgurukul/${id}`)
    const data = await res.json()
    return{
        props:{balgurukul:data},
    }
}

export default Product