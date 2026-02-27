import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-gray-500/40 p-4 flex flex-col'>
      <SearchInput/>
      <div className='divider divider-error px-3'></div>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar
