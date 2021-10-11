import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import { useAnnotate } from '../context/AnnotateContext'
import { useTheme } from '../context/ThemeContext'

function Navbar({ visible }) {
    const { DummyText, selected, setSelectedText } = useAnnotate()
    const { getTheme } = useTheme()
    const handleAddAnnotation = () => {
        const Theme = getTheme()
        const selectedData = {
            baseOffset: document.getSelection().anchorOffset,
            finalOffset: document.getSelection().focusOffset,
            text: document.getSelection().toString(),
            tabIndex: selected,
            category: Theme.type.id
        }
        setSelectedText(selectedData, Theme.type.idx)
    }
    return (
        <nav className="sticky top-0 left-0">
            <div className="px-6 py-2.5 h-14 shadow-md bg-blue-50 flex justify-end items-center">
                <button
                    className={`h-7 w-7 ${visible ? 'flex' : 'hidden'} items-center justify-center border-dashed border-2 border-gray-700 p-0.5`}
                    onClick={handleAddAnnotation}
                >
                    <PlusIcon className="h-6 w-6 text-gray-700" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
