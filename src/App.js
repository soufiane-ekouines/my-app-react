import React, { useEffect, useState } from 'react'
import './App.css'
import ContactCart from './Contact-Cart';

const App = () => {
  // const Contacts =
  //   [
  //     {
  //       "avatarUrl": "https://via.placeholder.com/150",
  //       "name": "soufiane ekouines",
  //       "email": "ekouiness@gmail.com",
  //       "age": 22
  //     },
  //     {
  //       "avatarUrl": "https://via.placeholder.com/150",
  //       "name": "omar elamrani",
  //       "email": "omar@gmail.com",
  //       "age": 23
  //     },
  //     {
  //       "avatarUrl": "https://via.placeholder.com/150",
  //       "name": "Med Ashor",
  //       "email": "Med@gmail.com",
  //       "age": 24
  //     }
  //   ];

    // fetch("http://127.0.0.1:8000/users")
    //     .then(response => response.json())
    //     .then(data => console.log(data))


const [Contacts,setContacts] = useState([]);

useEffect(()=>{
     fetch("http://127.0.0.1:8000/users"
    , {
      method: "POST",
    }
    )
      .then(response => response.json())
      .then(
        data => {
                setContacts(data)
                // console.log(data)
              }
                
                );

},[])

 

  return (
    //div
    // React.createElement("div", null,title)
    <>
      {Contacts.map((contact,index) => {
        return(
          <ContactCart key={index} avatarUrl={contact.adresse} name={contact.first_name} email={contact.email_pro} age={contact.age} />
        )
      })}
      {/* <ContactCart avatarUrl="https://via.placeholder.com/150" name="soufiane ekouines" email="ekouiness@gmail.com" age={22} />
      <ContactCart avatarUrl="https://via.placeholder.com/150" name="omar elamrani" email="omar@gmail.com" age={23} />
      <ContactCart avatarUrl="https://via.placeholder.com/150" name="Med Ashor" email="Med@gmail.com" age={24} /> */}

    </>
  )
}
export default App;