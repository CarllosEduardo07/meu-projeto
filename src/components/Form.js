function From (){
    function cadastrarUsuario(e){
        e.preventDefault()//para o Envio do formulario para o server
        console.log('Cadastrou o Usuário!')
    }

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default From