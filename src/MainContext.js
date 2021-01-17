import React from 'react'

const Context = React.createContext();

export const Provider =({children})=>{
    <Context.Provider value={"hello there"}>
    <children/>
    </Context.Provider>

}
export default Context;