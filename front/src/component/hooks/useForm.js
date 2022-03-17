//@ts-check
import {useContext, useState} from "react";
import DollarContext from "./DollarContext";
import pool from "../../config/conextion"
import conextion from "../../config/conextion";
// import MessageContext from "./MessageContext";
import toast from 'react-hot-toast';


export const useForm= (initialState = {}) =>{
    // const {message, setMessage} = useContext(MessageContext)
    const {dollar} = useContext(DollarContext );
    const [form, setForm]  = useState(initialState);

    const update = ({target}) => setForm({...form, [target.name]: target.value})

    const updateHook = ({target}, name) =>{
        let value1 = target.value * dollar
        let value2 = parseInt(target.value)
        if(!target.value || target.value.isNaN){
            value1= 0
            //value2 = 0
        }
        setForm({...form,
                [name]: value1.toFixed(2),
                [target.name]: value2})
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
    // const updateInitial = () =>{
    //     setForm( dataDefault)
    // }
    const saveMemoryRAM = () =>{
        conextion.setMemoryRam(form.proforma_id, form.id, form)
            .then((m)=>toast.success("Save Memory RAM success"))//{ className: 'bg-outline-success'}
            .catch((m)=>toast.error("Error Save Memory RAM") )//{  className: 'outline-success'}
    }
    // const savrte = () =>{
    //     console.log(form)
    //     conextion.setMemoryRam(form.proforma_id, form.id, form)
    //         .then((m)=>toast.success("Save Memory RAM success"))//{ className: 'bg-outline-success'}
    //         .catch((m)=>toast.error("Error Save Memory RAM") )//{  className: 'outline-success'}
    // }
    return{
        form,
        // add,
        // remove,
        updateHook,
        saveMemoryRAM,
        update,
        clean,
        adding
    };
}
