function OutraLista({itens}){
    return (
        <>
            {/* condição MAP, percorre todos o array para rederizar */}
            <h3>Lista de Coisas boas:</h3>
            {itens.length > 0 ? ( //if
            itens.map((item, index) => (<p key={index}>{item}</p>))
            ) : ( //else
                <p>Não há itens na lista!</p>
            )}
        </>
    )
}
export default OutraLista