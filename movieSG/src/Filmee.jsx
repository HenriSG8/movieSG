import { useEffect, useState } from 'react';
import {  useParams , useNavigate   } from 'react-router-dom'
import api from "./services/api";
import '../src/css/filmee-info.css'
import { toast } from 'react-toastify'

function Filmee() {
    const {id} = useParams();
    const navigate = useNavigate()
    const[ filme , setfilme] = useState({});
    const[ loading , setloading] = useState(true);
  
    useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`,{
        params:{
          api_key: "7fbee966dcca15e34a84ff539e33c11b",
          language: "pt-BR",

        }

      })
      .then((response) => {
        setfilme(response.data);
        setloading(false);
      })

      .catch(() => {
        console.log("fime n escontrado")
        navigate("/",{replace:true})
        return;
      })


    }

    loadFilme();

    return() =>{

      console.log("COMPONENTE FOI DESMONTADO")

    }


    

  },[navigate,id])



  function salvarFilme (){

    const minhaLista = localStorage.getItem("@movieSG");

    let filmeSalvos = JSON.parse(minhaLista) || [];

   const hasFilme = filmeSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

   if(hasFilme){
    toast.warn("O FILME JÁ ESTA SALVO")
    
    
    
    return;
   }

   filmeSalvos.push(filme);
   localStorage.setItem("@movieSG", JSON.stringify(filmeSalvos));
   toast.success("FILME SALVO COM SUCESSO!")


  }

  if(loading){
    return(

      <div className='filme-info' >
      <h1> caregando detalhes... </h1>

      </div>

    )

  }



    return (
      <div className='filme-info' >
        <h1 className='titlei'> {filme.title} </h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
        <h3>  Sinopse </h3>
        <span> {filme.overview}  </span>

        <strong> Avaliação: {filme.vote_average} / 10 </strong>


        <div className='area-buttons'>  
        
          <button  onClick={salvarFilme} className='bnt2' > Salvar </button>

          <button className='bnt3' >

          <a target='blank' rel='external' href={ `https://www.youtube.com/results?search_query= ${filme.title} Trailer `  } > 
            Trailer
          </a>

          </button>
        
        
        
         </div>




      </div>
      )
  }
  
  export default Filmee;