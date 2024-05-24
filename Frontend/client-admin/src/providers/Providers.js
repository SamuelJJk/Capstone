import React,{useState} from "react";
import {SelectClassContext} from "../Context/context";

export const SelectClassProvider = ({children})=>{
    const [selectedClass, setSelectedClass] = useState();

    return(
        <SelectClassContext.Provider value={{selectedClass,setSelectedClass}}>
            {children}
        </SelectClassContext.Provider>
    )
}