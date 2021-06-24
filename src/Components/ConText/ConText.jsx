import React ,{ useContext , createContext } from "react";

export const EmployeeConText = createContext([]);
export const EmployeeConTextProvider = EmployeeConText.Provider;

export function UseEmployeeConText(){
    return useContext(EmployeeConText)
}