import { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import DOMPurify from 'dompurify';

export default function Cadastro(){

    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const cleanedEmail  = DOMPurify.sanitize(email);
        const cleanedFullname  = DOMPurify.sanitize(fullName);
        const cleanedUsername  = DOMPurify.sanitize(username);

        const formData = new FormData();
        formData.append('email', cleanedEmail);
        formData.append('full_name', cleanedFullname);
        formData.append('username', cleanedUsername);
        formData.append('password', password);

        try {
            const response = await axios.post('http://localhost:3000/user/registerUser', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (response.status === 201) { 
                window.location.reload();
            } else {
                setMessage('Failed to register the story');
            }
        } catch (error) {
            setMessage(error.message)
        }
    }
    
    return(
        <div className="Login-conteiner">
            <header> </header>    
            <h1> Cadastre-se</h1>
            <form  className="form" onSubmit={handleSubmit} >
                <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value) } 
                />
                <input
                type="text"
                placeholder="Digite seu nome completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value) } 
                />
                <input
                type="text"
                placeholder="Digite seu username"
                value={username}
                onChange={(e) => setUsername(e.target.value) } 
                />
                <input
                type="password"
                placeholder="*****"
                value={password}
                onChange={(e) => setPassword(e.target.value) } 
                />
                <button type="submit"  > Registrar </button>
            </form>
            <Link className="Button-link" to="/Login">
            Já possui uma conta? Faça login
            </Link>
        </div>
    )
}

