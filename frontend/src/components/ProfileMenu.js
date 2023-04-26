import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ProfileMenu({toggleUser}) {

  const [dropdown, setDropdown] = useState(false);
  const tempID = 1

  return (
    <div className='container'>

      <button className="flex mx-3 text-sm rounded-full md:mr-0 focus:ring-2 focus:ring-red-600" type="button" onClick={() => setDropdown((prevState) => !prevState)}>
        <img className="w-10 h-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" />
      </button>

      {
        dropdown &&
        <div id="dropdownInformation" className="absolute top-20 right-20 z-10 divide-y rounded-lg shadow w-44 bg-formDark divide-gray-600">
          <div className="px-4 py-3 text-sm text-white">
            <div>User</div>
            <div className="font-medium truncate">Ronit Khatri</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link to={`dashboard/${tempID}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Events</Link>
            </li>
            <li>
              <Link to="settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
            </li>
          </ul>
          <div className="py-2">
            <button onClick={toggleUser} className="block px-4 py-2 text-sm w-full hover:bg-gray-600 text-gray-200">Sign out</button>
          </div>
        </div>
      }


    </div>
  )
}