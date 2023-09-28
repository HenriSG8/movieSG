import React, { useEffect  ,useState } from "react";
import api from "./services/api";
import {Link} from 'react-router-dom';
import './css/Home2.css';




//URL da api :/movie/now_playing?api_key=7fbee966dcca15e34a84ff539e33c11b&languege=pt-BR


export default function Home() {
  
  const [filmes, setfilmes ] = useState([]);
  const [filmes2, setfilmes2] = useState([]);

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
  
    loadFilmes();
    loadFilmes2(); // Carrega filmes para container2
  }, []);




    
  
  
  return (
            <div className="container">

<h1 className="name-categori"> Destaques </h1>
    
    <div className="lista-filmes">
    {filmes.map((filme) => (
      <article key={filme.id} className="filme-item">
        
        
         <div className="titulos"> <strong className="title-filme" >{filme.title}</strong> </div>   
        <img
          src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
          alt={filme.title}
        />
        <Link to={`/Filmee/${filme.id}`} className="acessar-link">
          Acessar
        </Link>
      </article>
    ))}
  </div>


  <div className="container2">
  
        <h1 className="name-categori">Filmes Populares </h1>
  
  <div className="lista-filmes">
    {filmes2.map((filme) => (
      <article key={filme.id} className="filme-item">
      
      <div  className="titulos" > <strong className="title-filme">{filme.title}</strong> </div>  
       
       
        <div className="imgFilme">  <img className="imgt"
          src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
          alt={filme.title}
        />
        </div>
        
        
        <div className="acessar"> <Link to={`/Filmee/${filme.id}`} className="acessar-link">
          Acessar
        </Link>  </div>  
      </article>
    ))}
  </div>
</div>



            </div>

       




    );
}

