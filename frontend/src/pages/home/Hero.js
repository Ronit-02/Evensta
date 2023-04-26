import React from 'react'
import Card from '../../components/Card'
import { events } from '../../data/eventData'
import { Link } from 'react-router-dom'
import {CiSearch} from 'react-icons/ci'

export default function Hero() {
  return (
    <div className='container'>
      <h1 className="text-lg text-white text-xl my-8 ml-16">Explore events</h1>
      {/* Search Bar */}

      <form action="" className="relative w-80 ml-16">
        <CiSearch className='absolute left-2 top-2.5 text-gray-500 text-3xl'/>
        <input type="search"
          className="w-full p-4 pl-12 text-sm text-white border border-gray-700 rounded-lg bg-transparent focus:ring-blue-500 placeholder-gray-400"
          placeholder="Search events..."
          required
        />
        <button className="text-white bg-blue-700 absolute right-2 top-2 focus:ring-4 focus:ring-blue-400 hover:bg-blue-800 font-medium rounded-lg px-4 py-2">Search</button>
      </form>

      {/* Cards */}
      <div className="flex items-center justify-between">
        <div className='container flex flex-row flex-wrap p-16'>
          <img src="../../" alt="" />
          {events.map((event) => {
            return (
              <Link to={`event/${event.id}`} key={event.id}>
                < Card
                  // imageUrl={`../images/${event.imageUrl}.jpg`}
                  imageUrl={event.imageUrl}
                  category={event.category}
                  title={event.title}
                  date={event.date}
                  month={event.month}
                />
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  )
}