import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import DummyText from '../DummyText'
import SearchBar from './SearchBar'
import { useAnnotate } from '../context/AnnotateContext'

function SideBar() {
    const { makeVisible, inVisible, setSelected, getSelectedText, selected } = useAnnotate()
    const [tab, setTab] = useState(0)
    const [tabData, setTabData] = useState(DummyText)

    useEffect(() => {
        document.addEventListener('selectionchange', (e) => {
            if (document.getSelection().toString().trim()) {
                makeVisible()
            }
            else {
                inVisible()
            }
        })
        return () => {
            document.removeEventListener('selectionchange', () => { })
        }
    }, [])

    useEffect(() => {
        const data = getSelectedText()
        // data.forEach((item) => {
        //     console.log(DummyText[tab].data.at())
        // })
        // document.getElementById('panel1').innerText.replace(data[0].data[0].text, 'Hello')
        const el = document.querySelector(`div[itemid="panel${tab + 1}"]`)
        console.log(data[0].data[4].text)
        console.log(el && el.innerHTML)
        if (el !== null)
            tabData[tab].data = el.innerHTML.replace(data[0].data[4].text, <p className="text-xl text-red-500">HEllo</p>)
    })

    return (
        <div className="flex">
            <Tab.Group vertical onChange={(index) => {
                setSelected(index)
                setTab(index)
            }}>
                <Tab.List className="flex flex-col items-start justify-start max-w-xs flex-shrink-0 p-3 max-h-[calc(100vh-56px)] overflow-y-scroll">
                    <SearchBar />
                    {
                        tabData.map(item => {
                            return (
                                <Tab className={({ selected }) => `px-3 py-2 font-semibold text-gray-600 text-left rounded-lg user-select-none ${selected ? 'bg-blue-100' : ''}`}>{item.data.substring(0, 50) + '...'}</Tab>
                            )
                        })
                    }
                </Tab.List>
                <div id="dummy_text_container">
                    <Tab.Panels id='dummy_text_container' className="flex-grow p-3">
                        {
                            tabData.map(item => {
                                return (
                                    <Tab.Panel itemID={`panel${item.id}`}>{item.data}</Tab.Panel>
                                )
                            })
                        }
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </div>
    )
}

export default SideBar
