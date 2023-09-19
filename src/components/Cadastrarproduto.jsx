import { Alert, Grid, Box, Button, Container, TextField, Typography, Link } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header2 from './header2'


function CadastrarProduto() {
  const [nome, setNome] = useState("");
  
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [cadastro, setCadastro] = useState(false);
  const [erro, setErro] = useState(false)

  function cadastrar(evento) {
    evento.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(

        {
          nome: nome,
          preco: preco,
          descricao: descricao,
          imagem: imagem,
        }
      )
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        if (json.nome) {
          setCadastro(true);
        } else {
          setErro(true);
        }
      })
      .catch((erro) => { setErro(true) })
  }
  useEffect(() => {
    setNome("");
    setPreco("");
    setDescricao("");
    setImagem("");
    setCadastro(false)
  }, [cadastro]);

  const navigate = useNavigate();

  useEffect(() => {
    if (cadastro) {
      localStorage.setItem("Produto", JSON.stringify({ nome: nome }))
      setNome("");
      setPreco("");
      setDescricao("");
      setImagem("");
      navigate("");
    }
  }, [cadastro]);

  return (
    <>
      <Header2 />
      <Container component="section" maxWidth="sm">

        <Box sx={{
          mt: 10,
          backgroundColor: "gray",
          padding: "50px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Typography component="h1" variant='h4' color={'white'}>Faça uma sugetão de um produto Abaixo!</Typography>

          {erro && (<Alert severity="warning" sx={{ mt: 2, mb: 2 }}>Desculpe tente novamente.</Alert>)}
          {cadastro && (<Alert severity="success" sx={{ mt: 2, mb: 2 }}>Obrigado por se cadastrar.</Alert>)}

          <Box component="form" onSubmit={cadastrar}>
            <TextField
              type="text"
              variant="filled"
              label="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              margin="normal"
              fullWidth>
            </TextField>
            
            <TextField
              type="text"
              variant="filled"
              label="Preço:"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              margin="normal"
              fullWidth>
            </TextField>
            <TextField
              type="text"
              variant="filled"
              label="Descrição:"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              margin="normal"
              fullWidth>
            </TextField>
            <TextField
              type="text"
              variant="filled"
              label="Url da Imagem"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
              margin="normal"
              fullWidth>
            </TextField>
            <Button type='submit' variant='contained' style={{ color: 'white' }} fullWidth sx={{ mt: 2, mb: 2 }}>Sugerir Este Produto!</Button>
          </Box>


        </Box>


      </Container>
    </>
  )
}
export default CadastrarProduto;