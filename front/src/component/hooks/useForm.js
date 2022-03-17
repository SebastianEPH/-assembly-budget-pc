//@ts-check
import {useContext, useState} from "react";
import DollarContext from "./DollarContext";
import conextion from "../../config/connection";
import toast from 'react-hot-toast';

export const useForm= (initialState = {}) =>{
    const {dollar} = useContext(DollarContext );
    const [form, setForm]  = useState(initialState);

    const update = ({target}) => setForm({...form, [target.name]: target.value})

    const updateHook= ({target}, name) =>{
        let value2 = target.value
        let value1 = null
        console.log("value2:  ",value2)
        if(!isNaN(target.value)){
            value1 = name ==="sol"? target.value * dollar: value1 = target.value / dollar
            // if(name.toString() ==="sol"){
            //     value1 = target.value * dollar
            // }else{
            //     value1 = target.value / dollar
            // }
            if(!target.value || target.value.isNaN){value1= 0}
            setForm({...form,
                [name]: value1.toFixed(2),
                [target.name]: value2})
        }else{
            toast.error("Please insert numbers", {duration: 1000})//{ className: 'bg-outline-success'}
        }
    }

    const clean = () =>{
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
        // toast("Clean form",{icon:"👏",  className: 'bg-primary'})
        toast.success("Clean form ")
    }
    const adding = () =>{
        setForm(form + "hola")
        // retorna el formulario inicial // reset
    }
    const saveMemoryRAM = () =>{
        conextion.setMemoryRam(form.proforma_id, form.id, form)
            .then((m)=>toast.success("Save Memory RAM success"))//{ className: 'bg-outline-success'}
            .catch((m)=>toast.error("Error Save Memory RAM") )//{  className: 'outline-success'}
    }
    return{
        form,
        updateHook,
        saveMemoryRAM,
        update,
        clean,
        adding
    };
}
