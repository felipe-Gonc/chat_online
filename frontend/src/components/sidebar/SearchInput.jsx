import React from 'react'
import {Search} from "lucide-react"

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='pesquisar...' className='input bg-transparent focus:bg-base-100/40 input-bordered h-10'/>
        <button type='submit' className='btn rounded-lg bg-red-500 hover:bg-red-600 text-white'>
            <Search/>
        </button>
    </form>
  )
}

export default SearchInput
