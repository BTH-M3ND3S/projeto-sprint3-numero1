import {
    Container, Typography, Grid, Card, CardContent,
    CardMedia, Button, Box, Rating, Avatar,
} from '@mui/material';
import { useEffect, useState } from "react";
import Produto from './produto'

function Pegardobanco() {

   
    const [produtos, setProdutos] = useState("");
    const [erro, setErro] = useState("");

    useEffect(() => {
        fetch( "https://jsonplaceholder.typicode.com/posts",{
          method: "GET",
          headers: {
            'Content-type' : 'application/json'
          }
        })
        .then( (resposta) => resposta.json())
        .then( (json) => {  setProdutos( json)})    
        .catch( (error ) => { setErro( true)})
      }, [])

    return (
        <>
         
         <Container sx={{
        display: "flex",
        flexflow: "row",
        flexWrap: "wrap",
        gap: "2rem",
      }}>
        
        
        { produtos && (
          produtos.map((produto, index) =>(
            <Produto
            imagem={produto.imagem} 
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            id={produto._id}
            />
          ))
        )}
      </Container>

        </>
    );
}

export default Pegardobanco;

