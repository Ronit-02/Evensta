import React from 'react'

export default function Popup(props) {

  return (props.trigger) ? (
    <div className='fixed top-0 left-0 w-full h-screen bg-transparent backdrop-blur-sm flex items-center justify-center'>
        <div className="relative p-8 bg-formDark text-white z-2">
            <div className="flex flex-row justify-between">
                <h1 className='font-mono text-xl'>{props.title}</h1>
                <button className='text-2xl' onClick={() => props.setTrigger(false)}>X</button>
            </div>
            {props.children}
        </div>
    </div>
  ) : ""
}
