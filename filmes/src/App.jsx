import { useState, useEffect } from "react";
import { Routes,Route } from "react-router"
import Home from "./components/Home";
import ProximosFilmes from "./components/ProximosFilmes";
import NavBar from "./components/NavBar";
import DetalhesFilme from "./components/DetalheFilme";

function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      const key = "2f583f5084aa1e06dc4c5dbcea1b049d";
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR`;
      const response = await fetch(url);
      const data = await response.json();
      setFilmes(data.results);
  
    }

    buscarFilmes();
  }, []);

  return (
    <section className="bg-black text-white font-family">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home filme={filmes}/>} />
      <Route path="/proximos" element={<ProximosFilmes/>}/>
      <Route path="/filme/:id" element={<DetalhesFilme/>}/>
    
      </Routes>
    </section>
  );
}

export default App;
