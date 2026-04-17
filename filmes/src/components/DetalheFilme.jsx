import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

function DetalhesFilme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState();
  useEffect(() => {
    async function buscar() {
      const key = "2f583f5084aa1e06dc4c5dbcea1b049d";
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-BR`;
      const response = await fetch(url);
      const data = await response.json();
      setFilme(data);
      console.log(data);
    }
    buscar();
  }, [id]);
  if (!filme) {
    return <p>Carregando...</p>;
  }
  return (
    <section className="mt-18 max-w-5xl m-auto p-6  h-[100%]">
  
  <button 
    onClick={() => navigate(-1)} 
    className="mb-10 bg-gray-800 hover:bg-purple-700 transition px-4 py-2 rounded-lg cursor-pointer"
  >
    ← Voltar
  </button>

  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900/80 rounded-2xl overflow-hidden">
    
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w780${filme.poster_path}`}
        alt={filme.title}
        className="w-full h-140 object-cover"
      />
    </div>

    <div className="p-6 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-4 text-center">{filme.title}</h1>
      <p className="font-light mb-6 text-gray-300 leading-relaxed">
        {filme.overview}
      </p>
      <div className="border-t border-gray-700 pt-4 space-y-2">
        <p><span className="text-gray-400">País de Origem:</span> {filme.origin_country?.[0]}</p>
        <p><span className="text-gray-400">Idioma Original:</span> {filme.original_language?.toUpperCase()}</p>
      </div>
    </div>

  </section>
</section>
  );
}

export default DetalhesFilme;
