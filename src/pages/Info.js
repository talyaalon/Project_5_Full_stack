import React from "react";
import {AuthContext} from "./Login"

function Info() {
    const user = React.useContext(AuthContext);
    user=user.current;
    console.log(user);
  return (

    <div style={{ 
        backgroundColor: '#f1f1f1',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
    }}>
      <h1 style={{ 
          textAlign: 'center',
          marginBottom: '20px'
      }}>User Information</h1>
      <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
      }}>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>
      </div>
    </div>
  );
}

// export default User;


// function Info(){
//     return(
//         <div  className="content">
//             Info
//         </div>
//     )
// }

export default Info;