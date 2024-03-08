import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const ContactPage = () => {
  const nav = useNavigate();
  const {state} = useLocation();
  const handleBack = () => {
    nav(-1)
  }
  return (
    <div>
      <p>Contact</p>
      <button className="border-2 border-fuchsia-400 p-3 mt-5 bg-cyan-400 text-white rounded-lg"
      onClick={handleBack}>Back</button>
      contact name is {state.name}

    </div>
  )
}

export default ContactPage