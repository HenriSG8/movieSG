import { useState } from "react";

import {Link} from 'react-router-dom'

export default function Cadastro(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    function handleregi(e){
        e.preventDefault();
        
        if(email !== "" && password !== ""){

            alert("teste")
        }else{
            alert("erro")
        }


    }
    
    return(

        <div className="Login-conteiner">

            <h1> Cadastre-se</h1>


            <form  className="form" onSubmit={handleregi} >

            <input
                type="text"
                placeholder="Digite seu nome completo"
                volue={email}
                onAbort={(e) => setEmail(e.target.value) } 
                />



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

                <button type="submit"  > Registrar </button>



            </form>

            <Link className="Button-link" to="/Login">
            Já possui uma conta? Faça login
            </Link>

        </div>

      


    )





}

