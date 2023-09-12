import { Avatar, Button, Container, } from "@mui/material";
import Img from "./components/baki.jpg";
import { useEffect, useState } from "react";
import Filme from "./components/filme";

function App(){

  const [filmes, setFilmes]= useState();
  const [erro, setErro]= useState();

  useEffect(() => {
    fetch( process.env.REACT_APP_BACKEND + "filmes",{
      method: "GET",
      headers: {
        'Content-type' : 'application/json'
      },
      
    })
    .then( (resposta) => resposta.json())
    .then( (json) => {  setFilmes( json)})    
    .catch( (erro ) => { setErro( true)})
  }, [])
    return (
      <>
      <h1>Filmes</h1>
      <Container sx={{
        display: "flex",
        flexflow: "row",
        flexWrap: "wrap",
        gap: "2rem"
      }}>
        
        
        { filmes && (
          filmes.map((filme, index) =>(
            <Filme
            imagem={filme.imagem} 
            titulo={filme.titulo}
            descricao={filme.descricao}
            categoria={filme.categoria}
            ano={filme.ano}
            duracao={filme.duracao}
            />
          ))
        )}
      </Container>
      </>
  );}

export default App;
