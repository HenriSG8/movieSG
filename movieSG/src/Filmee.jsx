import { useEffect, useState } from 'react';
import {  useParams    } from 'react-router-dom'
import api from "./services/api";

function Filmee() {
    const {id} = useParams();
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
      })


    }

    loadFilme();

    return() =>{

      console.log("COMPONENTE FOI DESMONTADO")

    }


  },[])




    return (
      <div>
  
      <h1> ACESSANDO filme {id} </h1>
      
      </div>
      )
  }
  
  export default Filmee;