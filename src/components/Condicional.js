import { useState } from 'react'

function Condicional (){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function enviarEmail(e){
        e.preventDefault()//para o email nao ser enviado pro php
        setUserEmail(email)   
        console.log(userEmail)//mostrando o email
    }
    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu E-Mail:</h2>
            <form>
                <input type="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' onClick={enviarEmail}>Enviar e-mail</button>
                
                {userEmail && (// condição
                //se o userEmail for preenchido, vai mostra na tela essa div
                    <div>
                        <p>O e-mail do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>

                )}
            </form>
        </div>
    )

}

export default Condicional
