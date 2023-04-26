import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function NewEvent() {

  const params = useParams()
  const id = params.id

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    location: "",
    guests: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleSubmit = () => {

  }

  return (
    <div className="bg-black min-h-screen" >
      <div className="flex items-center justify-center px-6 py-8 mt-4 mx-auto text-white">
        <div className="bg-formDark rounded-lg border border-gray-700 w-3/4 p-6 space-y-4 md:space-y-6 sm:p-8">

          {/* Heading */}
          <h1 className="text-xl font-bold tracking-wide md:text-2xl text-white">
            Create Event
          </h1>

          {/* Form */}
          <form className="flex lg:flex-row flex-col" action="#">
            <div className="basis-1/2 flex flex-col p-4">
              <div className='my-2'>
                <label htmlFor="title" className="block mb-2 text-sm font-medium">Title</label>
                <input type="text" name="title" onChange={handleChange} value={formData.title} className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Event Title" required="" />
              </div>
              <div className='my-2'>
                <label htmlFor="description" className="block mb-2 text-sm font-medium">Description</label>
                <textarea rows={5} type="text" name="description" onChange={handleChange} value={formData.description} placeholder="Event detail" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required="" />
              </div>
            </div>
            <div className="basis-1/2 flex flex-col p-4">
              <div className='my-2 flex sm:flex-row flex-col justify-between'>
                <div className='flex flex-col'>
                  <label htmlFor="Date" className="block mb-2 text-sm font-medium">Date</label>
                  <input type="date" name="date" onChange={handleChange} value={formData.date} placeholder="Event date" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required="" />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="Time" className="block mb-2 text-sm font-medium">Time</label>
                  <input type="time" name="time" onChange={handleChange} value={formData.time} placeholder="Event time" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required="" />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="Duration" className="block mb-2 text-sm font-medium">Duration</label>
                  <input type="text" name="duration" onChange={handleChange} value={formData.duration} placeholder="Event duration (in h)" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required="" />
                </div>
              </div>
              <div className='my-2'>
                <label htmlFor="location" className="block mb-2 text-sm font-medium">Location</label>
                <input type="text" name="location" onChange={handleChange} value={formData.location} placeholder="Location" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required="" />
              </div>
              <div className='my-2'>
                <label htmlFor="guests" className="block mb-2 text-sm font-medium">Add guests</label>
                <input type="email" name="guests" onChange={handleChange} value={formData.guests} placeholder="Guest email" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required="" />
              </div>
            </div>
          </form>
          <button onClick={handleSubmit} type="submit" className="w-24 ml-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
        </div>
      </div>
    </div>
  )
}