import Button from "./evento/Button"

function Evento(){
    function meuEvento(){
        console.log(`Ativando Primeiro Evento!`)
    }

    return(
        <>
        <p>Clique para disparar um evento: </p>
        <Button event={meuEvento} text="Primeiro Evento "/>
        </>
    ) 
}

export default Evento