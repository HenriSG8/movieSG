import axios from 'axios';
//Base da URL: https://api.themoviedb.org/3/
//URL da api :/movie/now_playing?api_key=7fbee966dcca15e34a84ff539e33c11b&languege=pt-BR


const api = axios.create({


baseURL: 'https://api.themoviedb.org/3/'

});

export default api;