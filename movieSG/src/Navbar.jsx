import React from "react";
import logo from '../public/imagem_2023-09-23_144701980.png'


const Navbar = () => {

    return(

        

        <div className="sidenav active " >

        

        <header>     <img src={logo} alt="Logo" className="logo"/>
  </header>
        
        

        <ul>
        
        <li>  
        <a href="/" > Home </a> 
        </li>
       
        <li>  
        <a href="/Cadastro" > Cadastro </a> 
        </li>

        <li>  
        <a href="/Login" > Login </a> 
        </li>

        </ul>
        </div>


    )





}

export default Navbar