import executeQuery from '../../../config/db'

export default async function bg(req,res){
  switch(req.method)
  {
    case "GET":
      await bgGetAll(req,res)
      break
    case "POST":
      await saveBg(req,res)
      break
  }
}

const bgGetAll = async (req, res)=> {
  let result = await executeQuery({
      query: 'SELECT * FROM bg',
      values: []
    })
  console.log(result[0]);
  res.json(result)
} 

const saveBg = async(req,res)=>{
  const{bg_name,partnering_org,state,district,
    region,
    pincode,
    org_under_bg,
    phone,
    mail} =req.body

    if(!bg_name || 
      !partnering_org||
      !state||
      !district||
      !region||
      !pincode||
      !org_under_bg||
      !phone||
      !mail)
      {
        return res.status(422).json({error:"Please add all the values"})
      }

     const bg = await new bg({
        bg_name,partnering_org,state,district,
    region,
    pincode,
    org_under_bg,
    phone,
    mail
      }).save()

      res.status(201).json(bg)
}