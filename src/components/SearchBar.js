import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

function SearchBar() {
    return (
        <div className="relative w-full flex items-center pl-12 border-2 border-gray-300 rounded-md">
            <span className="h-6 w-6 absolute left-3">
                <SearchIcon className="h-6 w-6" />
            </span>
            <input type="search" className="pr-3 py-2 outline-none w-full rounded-md" name="" id="" />
        </div>
    )
}

export default SearchBar
