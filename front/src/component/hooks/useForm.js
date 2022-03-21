//@ts-check
import {useContext, useState} from "react";
import DollarContext from "./DollarContext";
import toast from 'react-hot-toast';

export const useForm= (initialState = {}) =>{
    const {dollar} = useContext(DollarContext );
    const [form, setForm]  = useState(initialState);

    const update = ({target}) => {

        setForm({...form, [target.name]: target.value})
        console.log(form)
    }

    const updateHook= ({target}, name) =>{
        let value2 = target.value
        let value1 = null
        if(!isNaN(target.value)){
            value1 = name ==="sol"? target.value * dollar: target.value / dollar
            if(!target.value || target.value.isNaN){value1= 0}
            setForm({...form,
                [name]: value1.toFixed(2),
                [target.name]: value2})
        }else{
            toast.error("Please insert numbers", {duration: 1000})
        }
    }

    const clean = (toast = true) =>{
        const newObj = {}
        console.log("clean ", form)
        Object.entries(form).forEach(([key, value]) => {
            if(key === "proforma_id" || key === "id" ){
                newObj[key] = value
            }else{
                newObj[key] = ''
            }
        });
        setForm(newObj)
        if(toast){toast.success("Clean form ")}
    }

    return{
        form,
        updateHook,
        update,
        clean,
    };
}
