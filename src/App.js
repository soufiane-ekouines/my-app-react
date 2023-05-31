import React from 'react'
import './App.css'
import ContactCart from './Contact-Cart';

const App = () => {
  const title = "This is my first react element";
  return (
    //div
    // React.createElement("div", null,title)
    <>
      <ContactCart/>
      <ContactCart/>
      <ContactCart/>
      <ContactCart/>

    </>
  )
}
export default App;