
import {createContext, useState} from "react";
const DollarContext = createContext();

const initialState = 3.7

const DollarProvider = ({children}) =>{
    const [dollar, setDollar] = useState(initialState)
    const data = {dollar, setDollar}
    return (
        <DollarContext.Provider  value={data}>
            {children}
        </DollarContext.Provider>
    )
}
export {DollarProvider}
export default DollarContext;