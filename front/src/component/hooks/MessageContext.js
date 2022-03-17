
import {createContext, useContext, useState} from "react";
const MessageContext = createContext();

const initialState = true

const MessageProvider = ({children}) =>{
    const objMessage = {
        title:"",
        text:"",
        close:"close",
        type:"success"
    }

    const [showMessage, setShowMessage] = useState(initialState);
    const [message , setMessageM] =  useState(objMessage)

    const setMessage= (objMessaje)=>{
        setMessageM(objMessaje)
        setShowMessage(true)
    }

    return (
        <MessageContext.Provider value={{showMessage , setShowMessage, message, setMessage}}>
            {children}
        </MessageContext.Provider>
    )
}
export {MessageProvider}
export default MessageContext;