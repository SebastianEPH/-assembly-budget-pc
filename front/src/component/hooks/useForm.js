//@ts-check
import {useContext, useState} from "react";
import {UserContext} from "./UserContext";

export const useForm= (initialState = {}) =>{
    const {dollar} = useContext(UserContext );
    const [form, setForm]  = useState(initialState);


    const cleanObj = (obj) => {
        const newObj = {}
        Object.entries(obj).forEach(([key, value]) => {
            newObj[key] = ''
            if(newObj[key] === "proforma_id" || newObj[key] === "id" ){

            }

        });
        return  newObj
    }


    const update = ({target}) => setForm({...form, [target.name]: target.value})

    const updateHook = ({target}, name) =>{
        let value1 = target.value * dollar
        let value2 = parseInt(target.value)
        if(!target.value || target.value.isNaN){
            value1= 0
            value2 = 0
        }
        setForm({...form,
                [name]: value1.toFixed(2),
                [target.name]: value2})
    }



    const reset = () =>{
        console.log("form:",form,"initial: ",initialState)
        const hola = cleanObj(form)
        console.log('nuevo forn limpio pex',hola)
        setForm(hola)
    }
    const adding = () =>{
        setForm(form + "hola")
        // retorna el formulario inicial // reset
    }
    // const updateInitial = () =>{
    //     setForm( dataDefault)
    // }
    const save = () =>{
        console.log(form)
        //save in database
        // setForm(form + "hola")
        // setForm(...form)
        // retorna el formulario inicial // reset
    }

    return{
        form,
        // add,
        // remove,
        updateHook,
        save,
        update,
        reset,
        adding
    };

}
