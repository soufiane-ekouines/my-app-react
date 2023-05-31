import React, { useState } from 'react';

const ContactCart = () => {
  const [ShowAge,setShowAge] = useState(false);

    return (
    
        <div className='contact-card'>
        <img 
        src=''
        alt='profile'
        ></img>
      
      <div className='user-details'>
        <p>Name: soufiane ekouines</p>
        <p>Email: ekouiness@gmail.com</p>
        <button onClick={()=>{setShowAge(!ShowAge)}}>age</button>
        {ShowAge &&  <p>Age: 25</p>}
      </div>
      </div>
    );
}

export default ContactCart;
