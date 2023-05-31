import React, { useState } from 'react';

const ContactCart = (props) => {
  const [ShowAge,setShowAge] = useState(false);

    return (
    
        <div className='contact-card'>
        <img 
        src={props.avatarUrl}
        alt='profile'
        ></img>
      
      <div className='user-details'>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={()=>{setShowAge(!ShowAge)}}>age</button>
        {/* if ShowAge true sho age else hide it  */}
        {ShowAge &&  <p>Age: {props.age}</p>}
      </div>
      </div>
    );
}

export default ContactCart;
