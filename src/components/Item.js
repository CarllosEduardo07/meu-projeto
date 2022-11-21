import PropsTypes from 'prop-types'

function item ({marca, ano_lancamento}){
    return(
        <>
            <li>
                {marca} - {ano_lancamento}
            </li> 
            
        </>
    )
}

item.PropsTypes = { //colocando Tipos e Required
    marca: PropsTypes.string.isRequired,
    ano_lancamento: PropsTypes.number.isRequired,
}

item.defaultProps ={ //colocando um valor definido para o item
    marca: 'Falto a marca',
    ano_lancamento: 0,
}
export default item

