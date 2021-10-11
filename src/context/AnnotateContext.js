import React, { useContext, useState, useEffect } from 'react'
import DummyText from '../DummyText'
import { categories } from '../components/Category\
'

const AnnotationContext = React.createContext();

export function useAnnotate() {
    return useContext(AnnotationContext)
}

function AnnotateContext({ children }) {

    const [visible, setVisible] = useState(false)
    const [annotationData, setAnnotationData] = useState(null)
    const [selected, setSelected] = useState(0)

    function makeVisible() {
        setVisible(true)
    }

    function inVisible() {
        setVisible(false)
    }

    function setSelectedText(data, id) {
        annotationData[id].data.push(data)
        localStorage.setItem('annotation-data', JSON.stringify(annotationData))
    }

    function getSelectedText() {
        return JSON.parse(localStorage.getItem('annotation-data'))
    }

    useEffect(() => {
        if (localStorage.getItem('annotation-data')) {
            setAnnotationData(JSON.parse(localStorage.getItem('annotation-data')))
        } else {
            const initialState = categories.map(item => {
                return {
                    type: item.name.split(' ').join('_').toUpperCase(),
                    data: []
                }
            })
            localStorage.setItem('annotation-data', JSON.stringify(initialState))
        }
    }, [])

    const annotationFunctions = {
        visible,
        makeVisible,
        inVisible,
        annotationData,
        setSelected,
        selected,
        DummyText,
        setSelectedText,
        getSelectedText
    }
    return (
        <AnnotationContext.Provider value={annotationFunctions}>
            {children}
        </AnnotationContext.Provider>
    )
}

export default AnnotateContext
