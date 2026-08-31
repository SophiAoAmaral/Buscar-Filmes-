# BusqueSerie

Aplicação front-end desenvolvida em React para explorar filmes em alta, próximos lançamentos e informações detalhadas sobre cada produção.

O projeto foi criado com o objetivo de praticar consumo de APIs, componentização, rotas dinâmicas e construção de interfaces utilizando React e Tailwind CSS.

---

## Funcionalidades

- Listagem de filmes em alta
- Visualização dos próximos lançamentos
- Exibição da avaliação dos filmes
- Exibição de popularidade
- Posters obtidos diretamente da API
- Página individual para cada filme
- Sinopse do filme
- País de origem
- Idioma original
- Navegação entre páginas com React Router
- Interface desenvolvida com Tailwind CSS

---

## Tecnologias utilizadas

- React
- JavaScript
- Tailwind CSS
- React Router
- Vite
- Fetch API
- TMDB API

---

## Objetivo do projeto

O principal objetivo deste projeto foi colocar em prática conceitos importantes do desenvolvimento Front-End, principalmente:

- Consumo de APIs REST
- Requisições assíncronas
- fetch
- async/await
- useState
- useEffect
- Props
- Componentização
- Renderização de listas
- Rotas dinâmicas
- useParams
- useNavigate
- Estilização com Tailwind CSS

---

## API

Os dados utilizados na aplicação são fornecidos pela The Movie Database — TMDB.

A aplicação realiza requisições para buscar:

### Filmes populares

Exibe os filmes que estão em alta no momento.

### Próximos lançamentos

Consulta os próximos filmes previstos para lançamento.

### Detalhes do filme

Cada filme possui uma página própria utilizando seu `id`, onde são exibidas informações adicionais como:

- Título
- Poster
- Sinopse
- País de origem
- Idioma original

---

## Estrutura do projeto

```text
src/
│
├── components/
│   ├── Home.jsx
│   ├── NavBar.jsx
│   ├── ProximosFilmes.jsx
│   └── DetalheFilme.jsx
│
├── App.jsx
├── index.css
└── main.jsx
