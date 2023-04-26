import React, { useState } from 'react'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import Participant from './Participant'
import Popup from '../../components/Popup'
// import { userData } from '../../data/userData'

export default function Dashboard() {

  const userId = 1
  const [popup, setPopup] = useState(false)

  return (
    <div className="relative bg-black h-screen" >
      <div className='text-white lg:ml-24 ml-9'>
        
        <h1 className="text-3xl my-12">Your Events</h1>
        
        {/* Create Event */}

        <button className="px-4 py-2 bg-white text-black rounded-lg w-32">
          <Link to={`/newEvent/${userId}`} >
            Create Event
          </Link>
        </button>

        {/* User Cards */}

        <div className="container flex flex-row flex-wrap mt-4">

          <button 
          onClick={ () => setPopup(true)}
          >
            < Card
              imageUrl={"https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydCUyMGNyb3dkfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
              category={"concert"}
              title={"the weekend"}
              date={"21"}
              month={"dec"}
            />
          </button>

          <Popup 
            title="Participants" 
            trigger={popup} 
            setTrigger={setPopup}
            children={<Participant />} 
          />

        </div>
      </div>
    </div>
  )
}