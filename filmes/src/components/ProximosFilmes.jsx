import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

function ProximosFilmes(){
        const navigate = useNavigate()
         const [lancamento, setLancamento] = useState([]);
         useEffect(() => {
           async function buscar() {
             const key = '2f583f5084aa1e06dc4c5dbcea1b049d';
             const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=pt-BR&region=BR`;
             const response = await fetch(url);
             const data = await response.json();
             setLancamento(data.results);
             console.log(data.results)

             
           }
           buscar();
         }, []);
       
       
           return(
               <section>
                   <h1 className="text-white mt-18 p-5 text-center text-2xl detalhe relative">Proximos Lançamentos</h1>
                   <section className="grid grid-cols-4  gap-6 items-center justify-center max-w-6xl m-auto">
                       {
                           lancamento.map((filme)=>(
                            <div key={filme.id} className="mt-15 bg-gray-900/80 rounded-2xl p-4 ">
                               <img
                               src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                               className='rounded-t-2xl h-80 w-full'
                               />
                                <div className="p-2">
                                    <h1 className='mt-2 mb-2 font-bold'>{filme.title}</h1>
                                    <p>Popularidade: {Math.round(filme.popularity)}%</p>
                                    <button 
                                    className='text-center bg-gray-700/50 p-2 rounded-2xl text-sm mt-3 block mx-auto cursor-pointer w-40 hover:bg-gray-500'
                                    onClick={() => navigate(`/filme/${filme.id}`)}
                                    >
                                        Ver Sobre</button>
                                </div>
                            </div>
                           ))
                       }
                   </section>
               </section>
           )
       }


export default ProximosFilmes