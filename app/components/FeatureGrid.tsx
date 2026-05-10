import React from 'react'

const FeatureGrid = () => {
  return (
    <div className='max-w-6xl mx-auto px-2 py-12 font-poppins'>
      {/* Container */}
      <div className='grid grid-cols-1 md:grid-cols-4 border-t border-l border-zinc-200'>
        
        {/* Main Title Box (Takes up 1 column on desktop) */}
        <div className='md:col-span-1 p-6 md:p-8 border-b border-r border-zinc-200'>
          <div className='flex items-center gap-2 mb-4'>
             <div className='w-2 h-2 bg-purple-600 rounded-sm'></div>
             <p className='text-[10px] uppercase tracking-wider text-zinc-500 font-semibold'>Oberion Product</p>
          </div>
          <h3 className='text-lg font-medium text-zinc-900 leading-snug'>
            Turn your schedule and services into a clean booking experience
          </h3>
        </div>

        {/* Feature Box 1 */}
        <div className='p-6 md:p-8 border-b border-r border-zinc-200'>
          <h4 className='text-sm font-semibold text-zinc-900 mb-3 flex items-center gap-2'>
            <span className='w-3 h-3 bg-purple-500 rounded-sm'></span> Offerings
          </h4>
          <p className='text-xs text-zinc-500 leading-relaxed font-medium'>
            A fast, seamless checkout that turns interest into bookings.
          </p>
        </div>

        {/* Feature Box 2 */}
        <div className='p-6 md:p-8 border-b border-r border-zinc-200'>
          <h4 className='text-sm font-semibold text-zinc-900 mb-3 flex items-center gap-2'>
            <span className='w-3 h-3 bg-blue-500 rounded-full'></span> Schedules
          </h4>
          <p className='text-xs text-zinc-500 leading-relaxed font-medium'>
            View all upcoming classes and appointments in one place.
          </p>
        </div>

        {/* Feature Box 3 */}
        <div className='p-6 md:p-8 border-b border-r border-zinc-200'>
          <h4 className='text-sm font-semibold text-zinc-900 mb-3 flex items-center gap-2'>
            <span className='w-3 h-3 bg-indigo-300 rounded-sm transform rotate-45'></span> Management
          </h4>
          <p className='text-xs text-zinc-500 leading-relaxed font-medium'>
            Manage your clients, contact, and plans from the Oberion dashboard.
          </p>
        </div>

      </div>
    </div>
  )
}

export default FeatureGrid