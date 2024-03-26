import {createContext, useContext, useState} from 'react'

const DentistStates = createContext()

const Context = ({children}) => {
    const [cart, setCart] = useState([])

    return(
        <DentistStates.Provider value={{cart, setCart}}>
            {children}
        </DentistStates.Provider>
    )
}

export default Context

export const useDentistStates = () => useContext(DentistStates)