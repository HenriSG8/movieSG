import { BrowserRouter,Routes , Route } from "react-router-dom";

import Cadastro from "./Cadastro";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
export default function RoutesApp(){

return(


<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>




)







}