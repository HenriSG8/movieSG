import { useEffect, useState } from 'react';
import {  Link  } from 'react-router-dom'
import "../src/css/Favoritos.css"



function Favoritos(){

const[filmes,setfilmes] = useState([])

useEffect(() => {

const minhaLista = localStorage.getItem("@movieSG")
setfilmes(JSON.parse(minhaLista) || [])

},[])

    function exclirFilme(id){

       let filtroFilmes = filmes.filter ( (item) => {
        return(item.id !== id)



       } )


        setfilmes(filtroFilmes);
        localStorage.setItem("@movieSG", JSON.stringify(filtroFilmes) )

    }


    return(

        <div className='meus-filmes' >

            <h1 className='titulo'> Favoritos </h1> 
            <ul>

                {filmes.map((item) => {

                return(

                    <li key={item.id} >
                   
                    <img className="imgf" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                        
                        <span className='titlef'>{item.title} </span>
                       


                    
                    
                        <div>
                            <Link className='link' to={`/Filmee/${item.id}`}> ver detalhe </Link>
                            <button className='bntfav' onClick={() => exclirFilme(item.id) } > Excluir </button>
                        </div>
                    
                    
                    </li>

                   )

                })}

            </ul>
        </div>

    )

}

export default Favoritos;