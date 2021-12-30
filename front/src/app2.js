import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [linea, setLinea1] = useState('hola');
    const [linea2, setLinea2] = useState('mundo');
    const [imagen, setImage] = useState("1")


    const cambia1 = function (event){
        //alert(event.target.value)
        setLinea1(event.target.value)
    }
    const cambia2 = function (event){
        setLinea2(event.target.value)
    }
    const setImagen = function (event){
        setImage(event.target.value)
        console.log(event.target.value)
    }
    const imgExport = function (event){
        alert('Exportar')
    }
    return (
        <div className="App">

            <h2>Escoger un proyecto existente</h2>
            <select onChange={setImagen}>
                <option value="1">esto se debe rellenar solo </option>
                <option value="2" >option 2</option>
            </select>
            <br/>
            <button>Ver proyecto</button>
            <br/>
            <h2>Crear nuevo proyecto</h2>

            <input onChange={cambia1} type="text" placeholder="Nombre"/>
            <br/>
            <input onChange={cambia2} type="text" placeholder="Texto 2"/>
            <br/>
            <button onClick={imgExport}>Crear</button>

            <div className="meme">
                <span>{linea}</span>
                <br/>
                <span>{linea2}</span>
                <img src={"/img/"+imagen+".jpg"} alt={imagen}/>
            </div>
        </div>
    );
}

export default App;
