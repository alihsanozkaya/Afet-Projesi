import {createContext, useState} from 'react'

export const Context = createContext()

export const ContextProvider = ({children}) =>{

    const [state, setState] = useState(false);

    const data = {
        state,
        setState
    }
    
    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
    
}