export default function Project (p){

return(
    <div>
        <br/>
        <h2>N: {p.index}</h2>
        <h2>Nombre: {p.name}</h2>
        <h3>Detalles: {p.details}</h3>
        <h5>Fecha: {p.date}</h5>
        <h5>Está activo? {p.active}</h5>
        <h5>location {p.location}</h5>
        <img src={p.img} alt=""/>
        <div>
            <button>Ir a proyecto</button>
            <button>Archivar</button>
        </div>

        <br/>
    </div>

);
}




