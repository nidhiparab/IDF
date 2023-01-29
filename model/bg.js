import executeQuery from '../config/db';

export default class Bg {
  constructor(BGName,PO,address,district,stateFull,stateAbbr,region,pincode,OU,Ph,Mail){
    //
  }
  
  getAll() {
    let result = executeQuery({
      query: 'SELECT * FROM bg',
      values: []
    })
    return result;
  }
 
}