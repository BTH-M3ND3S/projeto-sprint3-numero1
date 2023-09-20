import {
    Container, Typography, Grid, Card, CardContent,
    CardMedia, Button, Box, Rating, Avatar,
} from '@mui/material';
import { useEffect, useState } from "react";
import Produto from './components/produto'

function Pegardobanco() {

   
    const [produtos, setProdutos] = useState("");
    const [erro, setErro] = useState("");
    

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");

        fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario,{
          method: "GET",
          headers: {
            'Content-type' : 'application/json'
          }
        })
        .then( (resposta) => resposta.json())
        .then( (json) => {  setProdutos( json)})    
        .catch( (error ) => { setErro( true)})
      }, [])

   function Excluir(evento, id){
      evento.preventDefault()
      fetch( process.env.REACT_APP_BACKEND + "produtos",{
        method: "DELETE",
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(
  
          {
            id: id,
            usuario: localStorage.getItem("usuario")
          }
        )
      })
      .then( (resposta) => resposta.json())
      .then( (json) => {  
        const novalista = produtos.filter( (produto) => produto._id !== id);
        setProdutos(novalista);     
       })
      .catch( (error ) => { setErro( true)})
    }
   
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
            nome={produto.titulo}
            descricao={produto.descricao}
            preco={produto.ano} 
            excluir={(e) => Excluir(e,produto._id)}
            id={produto._id}
            
            />
          ))
        )}
      </Container>

        </>
    );
}

export default Pegardobanco;

