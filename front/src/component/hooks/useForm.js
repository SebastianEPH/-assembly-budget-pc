//@ts-check
import {useContext, useState} from "react";
import DollarContext from "./DollarContext";
import toast from 'react-hot-toast';
import connectionAPI from "../../connection/axios";

export const useForm= (initialState = {}, typeName='', modalHandleClose, reloadForDB  ) =>{
    const {dollar} = useContext(DollarContext );
    const [form, setForm]  = useState(initialState);


    const update = ({target}) => {
        setForm({...form, [target.name]: target.value})
        // console.log(form)
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

    const databaseAddIf = async ()=>{
       await connectionAPI.post(`/proforma/${form.proforma_id}/${typeName}`,form)
           .then((m)=>{
               toast.success(m.data.message)
               clean(false) // clean  inputs
           })
           .catch((m)=>{
               toast.error(m.response.data.message)
           })
        modalHandleClose()
        reloadForDB()
    }
    const databaseUpdate= async () =>{
        await  connectionAPI.put(`/proforma/${form.proforma_id}/${typeName}/${form.id}`,form)
            .then((m)=>{
                toast.success(m.data.message)
            })
            .catch((m)=>{
                toast.error(m.response.data.message)
            })
    }
    const databaseRemove= async() =>{
        await connectionAPI.delete(`/proforma/${form.proforma_id}/${typeName}/${form.id}`)
            .then((m)=>{
                toast.success(m.data.message)
                const div = document.getElementById(typeName+'_'+form.id)
                div.style.setProperty("display","none")
                if(div !== null){
                    while (div.hasChildNodes()){
                        div.removeChild(div.lastChild);
                    }
                }else{
                    console.log('No existe el modulo a eliminar ')
                }
            })
            .catch((m)=>{
                toast.error(m.response.data.message)
            })
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
        databaseAddIf,databaseUpdate,databaseRemove,
        updateHook,
        update,
        clean,
    };
}
