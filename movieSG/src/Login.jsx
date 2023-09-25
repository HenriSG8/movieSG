import { useState } from "react";
import '..//src/css/Login.css'
import {Link} from 'react-router-dom'

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    function handleLogi(e){
        e.preventDefault();
        
        if(email !== "" && password !== ""){

            alert("teste")
        }else{
            alert("erro")
        }


    }
    
    return(

        <div className="Login-conteiner">

                <header> </header>
           
            <h1> Login</h1>

            
            <form  className="form" onSubmit={handleLogi} >

                <input
                type="text"
                placeholder="Digite seu email"
                volue={email}
                onAbort={(e) => setEmail(e.target.value) } 
                />

                <input
                type="password"
                placeholder="*****"
                volue={password}
                onAbort={(e) => setPassword(e.target.value) } 
                />

                <button type="submit"  > entrar </button>



            </form>

            <Link className="Button-link" to="/Cadastro">
            Não possui cadastro ? Cadastre-se
            </Link>

        </div>

      


    )





}

