//@ts-check
import {useContext, useState} from "react";
import DollarContext from "./DollarContext";
import conextion from "../../config/connection";
import toast from 'react-hot-toast';
import axios from "../../config/axios";

const connectionAPI =  axios.create({
    baseURL: "http://127.0.0.1:5000/api/"

})


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
            toast.error("Please insert numbers", {duration: 1000})//{ className: 'bg-outline-success'}
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
        // toast("Clean form",{icon:"👏",  className: 'bg-primary'})
        if(toast){toast.success("Clean form ")}
    }

    const remove= async() =>{

    }
    const updateMemoryRAM = async() =>{
        await  conextion.updateMemoryRam(form.proforma_id, form.id, form)
             .then((m)=>{
                 toast.success(m.data.message)
                 console.log(m)
             })
             .catch((m)=>{
                  console.log(m)
                  toast.error(m.response.data.message)
             })
    }
    const addMemoryRAM = async() =>{
        await  conextion.addMemoryRam(form.proforma_id, form)
            .then((m)=>{
                toast.success(m.data.message)
                console.log(m)
                clean(false) // clean  inputs
            })
            .catch((m)=>{
                console.log(m)
                toast.error(m.response.data.message)
            })
    }

    return{
        form,
        updateHook,
        addMemoryRAM,
        updateMemoryRAM,
        update,
        clean,
        remove
    };
}
