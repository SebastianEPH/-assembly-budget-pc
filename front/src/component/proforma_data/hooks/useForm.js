//@ts-check
import {useState} from "react";

export const useForm= (initialState = {}) =>{

    const cleanObj = (obj) => {
        const newObj = {}
        Object.entries(obj).forEach(([key, value]) => {
            newObj[key] = ''
        });
        return  newObj
    }


    const [form, setForm]  = useState(initialState);


    const update = ({target}) =>{
        // console.log(e.target.name, e.target.value)
        setForm({...form, [target.name]: target.value})
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
        save,
        update,
        reset,
        adding
    };

}
