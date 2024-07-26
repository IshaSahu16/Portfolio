import React, { useState } from 'react'
import ishaLogo from '../assets/ishaLogo.png'

const TopNav = () => {

  return (
    <div className="md:fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md md:border md:border-gray-100 md:bg-Black-secondary py-3 md:shadow md:backdrop-blur-lg md:top-6 md:rounded-full lg:max-w-screen-lg">

      <div className="px-4 py-1">

        <div className="flex items-center justify-between">

          <div className=" hidden md:flex shrink-0 justify-between items-center">
            <div className='text-White-primary px-9 font-light hidden md:block'>Home</div>
            <div className='text-White-primary px-9 font-light hidden md:block'>About</div>
            <div className='text-White-primary px-9 font-light hidden md:block'>Services</div>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:gap-2 md:px-3">
            <div>
              <img className='w-8' src={ishaLogo} alt="" />
            </div>
            <div className='text-White-primary font-semibold px-3 tracking-widest leading-tight'>ISHA</div>
          </div>

          <div className="hidden md:flex items-center justify-end gap-3">
            <div className='text-White-primary px-9 font-light hidden md:block'>Resume</div>
            <div className='text-White-primary px-9 font-light hidden md:block'>Projects</div>
            <div className='text-White-primary px-9 font-light hidden md:block'>Contact</div>
          </div>

        </div>

      </div>



      <div className="md:hidden  fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-Black-secondary border border-White-secondary">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
          <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_0_59)">
                <path d="M1.6665 10.17C1.6665 8.26299 1.6665 7.30948 2.09917 6.51903C2.53184 5.72859 3.32229 5.23801 4.9032 4.25685L6.56986 3.22247C8.24099 2.18532 9.07656 1.66675 9.99984 1.66675C10.9231 1.66675 11.7587 2.18532 13.4298 3.22247L15.0965 4.25685C16.6774 5.23801 17.4678 5.72859 17.9005 6.51903C18.3332 7.30948 18.3332 8.26299 18.3332 10.17V11.4375C18.3332 14.6883 18.3332 16.3137 17.3569 17.3235C16.3805 18.3334 14.8092 18.3334 11.6665 18.3334H8.33317C5.19047 18.3334 3.61913 18.3334 2.64281 17.3235C1.6665 16.3137 1.6665 14.6883 1.6665 11.4375V10.17Z" stroke="white" stroke-width="1.5" />
                <path d="M10 12.5L10 15" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_0_59">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </button>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
              <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
            </svg>
          </button>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
            </svg>
          </button>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </button>

        </div>
      </div>


      {/* <div className="md:hidden flex items-center justify-between px-7 py-2">
        <div className="flex items-center space-x-2">
          <img className='w-7' src={ishaLogo} alt="Isha Logo" />
          <div className='text-White-primary font-semibold text-lg tracking-widest leading-tight'>ISHA</div>
        </div>
        <button className="text-White-primary text-lg font-semibold">
          Menu
        </button>
      </div> */}

    </div>
  )
}

export default TopNav
