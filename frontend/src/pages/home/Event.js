import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {events} from '../../data/eventData' 

export default function Event() {

  const params = useParams()
  const id = params.id

  const [btnText, setBtnText] = useState("Register")
  // const [btnColor, setBtnColor] = useState("white")
  const handleRegister = () => {
    setBtnText((prev) => prev === "Register" ? "Registered" : "Register")
    // setBtnColor((prev) => prev === "white" ? "lime-500" : "white")
  }

  return (

    <div className="bg-black min-h-screen">
      <div className='container relative flex flex-row mx-auto my-10 w-3/4 p-4'>

        {/* Event Image */} 
        <img src={events[id-1].imageUrl}alt="" className="w-1/2 h-96 rounded-2xl" />

        {/* Event Details */}
        <div className="container flex flex-col p-8 ml-12">
          {/* Title */}
          <h1 className="text-white capitalize tracking-wider font-bold text-2xl">{events[id-1].title}</h1>
          {/* Category */}
          <h3 className="text-blue-400 uppercase mt-3 tracking-widest">{events[id-1].category}</h3>
          {/* Desc */}
          <p className="text-gray-400 mt-6 leading-loose tracking-wide">{events[id-1].description}</p>
          {/* Button */}
          <button onClick={handleRegister} className={`absolute bottom-0 right-0 px-4 py-2 bg-white rounded-xl w-28`}>{btnText}</button>
        </div>
      </div>
    </div>
  )
}