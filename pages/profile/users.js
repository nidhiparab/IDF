import React from 'react';
import baseUrl from '../../helpers/baseUrl';

const Users = ({ users }) => {
  // user Object
  //   desgination
  //   email
  //   f_name
  //   l_name
  //   m_name
  //   mob
  //   qualification
  //   title
  //   user_id
  console.log(users);
    return (
    <>
        {users.map(user => { return (<>{ user.f_name } <br></br></>)  })}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/user/users`)
  const data = await res.json()
  console.log(data);
  return {
    props: {
      users: data,
    },
  }
}

export default Users;
