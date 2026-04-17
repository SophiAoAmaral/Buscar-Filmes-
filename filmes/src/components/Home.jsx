import { useNavigate } from "react-router";

function Home({ filme }) {
  const navigate = useNavigate();
  if (!filme) {
    return null;
  }
  return (
    <>
      <h1 className="text-white mt-18 p-5 text-center text-2xl detalhe relative">
        {" "}
        Filmes Em Alta
      </h1>
      <section className="flex flex-wrap gap-6 items-center justify-center max-w-6xl m-auto ">
        {filme.map((filme) => (
          <div className="mt-15 bg-gray-900/80 rounded-2xl p-4 ">
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              alt={filme.original_title}
              className="rounded-t-2xl h-80 w-full"
            />
            <div className="p-2">
              <h1 key={filme.id} className="mt-2 mb-2 font-bold">
                {filme.title}
              </h1>

              <p className="">⭐ {Math.round(filme.vote_average)}</p>
              <button
                className="text-center bg-gray-700/50 p-2 rounded-2xl text-sm mt-3 block mx-auto cursor-pointer w-40 hover:bg-gray-500"
                onClick={() => navigate(`/filme/${filme.id}`)}
              >
                Ver Sobre
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;
