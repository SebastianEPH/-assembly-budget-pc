import {useState} from "react";

export const useFormBasic = (initialState = []) =>{
    const [form, setForm]= useState(initialState)
    const onChange = ({target}) => {
        console.log(form)
        setForm({...form, [target.name]: target.value})
    }
    const cleanAll = ()=>{
        setForm([])
    }

    return{
        form,
        cleanAll,
        onChange
    }
}