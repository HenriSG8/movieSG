import React, { useEffect  ,useState } from "react";
import api from "./services/api";

//URL da api :/movie/now_playing?api_key=7fbee966dcca15e34a84ff539e33c11b&languege=pt-BR


export default function Home() {
  
  const [filmes, setfilmes] = useState([]);

  useEffect(()=>{

        async function loadFilmes(){

            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"7fbee966dcca15e34a84ff539e33c11b",
                    language: "pt-BR",
                    page:1 ,

                }


            })


   //console.log(response.data.results.slice(0,10));
   setfilmes(response.data.results.slice(0,10))

        }

        loadFilmes();



  },[])

  
  
  
  
  
    return (
        <div className="container"  >

        <div className="lista-filmes" >  
            {filmes.map((filme) => {

                    return(
                        <article key={filme.id} >

                        <strong> {filme.title}  </strong>

                        </article>
                    )


            })}
        
         </div>
            
            
        </div>
    );
}

