import React, { useEffect, useState } from 'react'
import './App.css'
import ContactCart from './Contact-Cart';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'X-auth-key':"token123"
  }
})

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


  const [Contacts, setContacts] = useState([]);
  const [label, setLabel] = useState();


  useEffect(() => {

    api.post('/users').then(res => {
      console.log(res.data)
      setContacts(res.data)
    })


    //      fetch("http://127.0.0.1:8000/users"
    //     , {
    //       method: "POST",
    //     }
    //     )
    //       .then(response => response.json())
    //       .then(
    //         data => {
    //                 setContacts(data)
    //                 // console.log(data)
    //               }

    //                 );

  }, [])

  //create user 

  const CreateSocial = async () => {
    try {
      let res = await api.post('/store-social', { label: label ,path:'te' });
      console.log(res.data);
      setLabel("");
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle the error here, such as displaying an error message to the user
    }
  }


  const getUsers = async () => {
    try {
      let res = await api.post('/users',{
        params:{
          _limit:3,
          _start:2
        }
      }).then(
        ({data})=>data
      );
      setContacts(res.data)
     
    } catch (error) {
      console.error('Error ', error);
      // Handle the error here, such as displaying an error message to the user
    }
  }

  return (
    //div
    // React.createElement("div", null,title)
    <>
      {Contacts.map((contact, index) => {
        return (
          <ContactCart key={index} avatarUrl={contact.adresse} name={contact.first_name} email={contact.email_pro} age={contact.age} />
        )
      })}
      {/* <ContactCart avatarUrl="https://via.placeholder.com/150" name="soufiane ekouines" email="ekouiness@gmail.com" age={22} />
      <ContactCart avatarUrl="https://via.placeholder.com/150" name="omar elamrani" email="omar@gmail.com" age={23} />
      <ContactCart avatarUrl="https://via.placeholder.com/150" name="Med Ashor" email="Med@gmail.com" age={24} /> */}
      <input type='text' value={label} onChange={(e)=>{ setLabel(e.target.value);}}/>

      <button onClick={CreateSocial}>Create social media</button>
    </>
  )
}
export default App;