import React, { useEffect  ,useState } from "react";
import api from "./services/api";
import {Link} from 'react-router-dom';
import './css/Home2.css';




//URL da api :/movie/now_playing?api_key=7fbee966dcca15e34a84ff539e33c11b&languege=pt-BR


export default function Home() {
  
  const [filmes, setfilmes ] = useState([]);
  const [filmes2, setfilmes2] = useState([]);
  const [filmes3, setfilmes3] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "7fbee966dcca15e34a84ff539e33c11b",
          language: "pt-BR",
          page: 1,
        },
      });
  
      setfilmes(response.data.results.slice(8,12 ));
    }
  
    async function loadFilmes2() {
      const response = await api.get("movie/popular", {
        params: {
          api_key: "7fbee966dcca15e34a84ff539e33c11b",
          language: "pt-BR",
          page: 2, // Página 2 (ou outra página) para carregar mais filmes
        },
      });
  
      setfilmes2(response.data.results.slice(0, 8)); // Ou a quantidade desejada de filmes
    }
  
    
    async function loadFilmes3() {
        const response = await api.get("movie/top_rated", {
          params: {
            api_key: "7fbee966dcca15e34a84ff539e33c11b",
            language: "pt-BR",
            page: 3, // Página 2 (ou outra página) para carregar mais filmes
          },
        });
    
        setfilmes3(response.data.results.slice(0, 8)); // Ou a quantidade desejada de filmes
      }


    
    
    loadFilmes();
    loadFilmes2();
    loadFilmes3();
    
    


    // Carrega filmes para container2
  }, []);




    
  
  
  return (
            <div className="container">

<h1 className="name-categori"> Destaques </h1>
    
    <div className="lista-filmes">
    {filmes.map((filme) => (
      <article key={filme.id} className="filme-item">
        
        
         
        
         <div className="imgFilme"> 

         <div className="titulos"> <strong className="title-filme" >{filme.title}</strong> </div>   
         
         <img className="img1" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}alt={filme.title}/> 
         
         
         
         
         </div>
        
        
        <Link to={`/Filmee/${filme.id}`} className="acessar-link">
          Acessar
        </Link>
      </article>
    ))}
  </div>


  <div className="container">
  
        <h1 className="name-categori">Filmes Populares </h1>
  
        <div className="lista-filmes">
    {filmes2.map((filme) => (
      <article key={filme.id} className="filme-item">
        
        
         
        
         <div className="imgFilme2"> 

         <div className="titulos"> <strong className="title-filme" >{filme.title}</strong> </div>  
        
         <img className="img2" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}alt={filme.title}/> 
         
         </div>
        
        
        <Link to={`/Filmee/${filme.id}`} className="acessar-link">
          Acessar
        </Link>
      </article>
    ))}
  </div>
</div>

<div className="container">
  
        <h1 className="name-categori">Filmes Mais Votados </h1>
  
        <div className="lista-filmes">
    {filmes3.map((filme) => (
      <article key={filme.id} className="filme-item">
        
        
         
        
         <div className="imgFilme3">
         
         <div className="titulos"> <strong className="title-filme" >{filme.title}</strong> </div>   

          <img  className="img3" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}alt={filme.title}/>
          
          
           </div>
        
        
        <Link to={`/Filmee/${filme.id}`} className="acessar-link">
          Acessar
        </Link>
      </article>
    ))}
  </div>
</div>

            </div>

       




    );
}

