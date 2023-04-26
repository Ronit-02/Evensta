import React from 'react'
import {AiOutlinePlusSquare} from 'react-icons/ai'
import {MdDeleteOutline} from 'react-icons/md'

export default function Participant() {

    const participants = ["rahul", "rohan", "manish"]

    const removeParticipant = (name) => {
        console.log("paritcipant removed", name)
    }

  return (
    <div className="w-72 bg-fromDark flex flex-col space-y-8 p-8 z-2">

        {
            participants.map((item) => {
                return(
                    <div className="flex flex-row items-center space-x-4 rounded-sm" key={item}>
                        <div className="bg-gray-700 w-3/4 py-2 text-center text-gray-300 font-mono capitalize tracking-wider">
                            {item}
                        </div> 
                        <button onClick={() => removeParticipant(item)}>
                            <MdDeleteOutline className='text-3xl text-red-600 cursor-pointer' />
                        </button>
                    </div>
                )
            })
        }
        <AiOutlinePlusSquare className='text-4xl text-lime-400 cursor-pointer' />
    </div>
  )
}
