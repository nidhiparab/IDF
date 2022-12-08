import data from '../../../model/Product'    //created demo database for iteration

export default async(req,res)=>{
    const {bid} = req.query

    //trace all the element and find match null is given for id that doesnt match
    const bk = data.map(bkk=>{
        if (bkk.id == bid){
            return(bkk)
        }
    })

    // remove all null from the array
    var filtered = bk.filter(function (el) {
        return el != null;
      });

    //check the response on http://localhost3000/api/balgurukul/1
    res.status(200).json(filtered[0]) 
    
}