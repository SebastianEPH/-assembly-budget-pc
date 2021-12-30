export default function Project (p){

return(
    <div>
        <br />
        <h2>Nombre: {p.name}</h2>
        <h3>Detalles: {p.details}</h3>
        <h5>Está activo? {p.active}</h5>
        <div>
            <button>Ir a proyecto</button>
            <button>Archivar</button>
        </div>

        <br/>
    </div>

);
}




