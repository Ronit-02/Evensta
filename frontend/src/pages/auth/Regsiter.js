import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="flex items-center justify-center px-6 py-8 mx-auto h-screen text-white">
      <div className="bg-gray-800 rounded-lg border border-gray-700 w-96 p-6 space-y-4 md:space-y-6 sm:p-8">

        {/* Heading */}
        <h1 className="text-xl font-bold tracking-wide md:text-2xl text-white">
          Register your account
        </h1>

        {/* Form */}
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label for="email" className="block mb-2 text-sm font-medium">Name</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="name" required="" />
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm font-medium">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
          </div>
          <div>
            <label for="password" className="block mb-2 text-sm font-medium">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required="" />
          </div>
          <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? 
            <Link to="/" className="font-medium text-blue-500 hover:underline text-blue-500"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}