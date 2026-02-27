import { LogOut } from 'lucide-react'
import React from 'react'

const LogoutButton = () => {
  return (
    <div className='mt-auto'>
      <LogOut className='rotate-180 text-white cursor-pointer hover:text-red-500 transition-colors duration-300'/>
    </div>
  )
}

export default LogoutButton
