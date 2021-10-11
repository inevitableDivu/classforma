import React, { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import SearchBar from './SearchBar'
import { useTheme } from '../context/ThemeContext'

export const categories = [
    { id: 0, name: 'Category 1', color: 'bg-red-600' },
    { id: 1, name: 'Category 2', color: 'bg-green-700' },
    { id: 2, name: 'Category 3', color: 'bg-blue-900' },
    { id: 3, name: 'Category 4', color: 'bg-green-400' },
]

function Category() {
    const { setTheme } = useTheme()
    const [selected, setSelected] = useState(categories[0].name)

    useEffect(() => {
        categories.map((item) => {
            if (item.name === selected) {
                setTheme(item.color, { id: item.name.split(' ').join('_').toUpperCase(), category: item.name, idx: item.id })
            }
        })
    }, [selected])

    return (
        <div className="p-4 min-w-[320px] flex-grow-0">
            <SearchBar />
            <div className="mt-4">
                <RadioGroup value={selected} onChange={setSelected}>
                    {categories.map((items) => {
                        return <RadioGroup.Option className={
                            ({ checked }) => `my-2 rounded-lg py-3 px-5 cursor-pointer user-select-none ${checked ? 'bg-gray-100' : 'hover:bg-gray-100 '}`
                        } key={items.id} value={items.name}>
                            {({ checked }) => {
                                return <div className="flex items-center font-semibold text-gray-700">
                                    <span className={`h-2 w-2 rounded-full ring-offset-2 ring-1 ring-black ${checked ? 'bg-blue-500' : ''} mr-3`}></span>
                                    <span className={`h-5 w-5 rounded-md border mr-3 ${items.color}`}></span>
                                    {items.name}
                                </div>
                            }}
                        </RadioGroup.Option>
                    })}
                </RadioGroup>
            </div>
        </div>
    )
}

export default Category
