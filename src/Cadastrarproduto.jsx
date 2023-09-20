import { Alert, Grid, Box, Button, Container, TextField, Typography, Link } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header2 from './components/header2'


function CadastrarProduto() {
  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [cadastro, setCadastro] = useState(false);
  const [erro, setErro] = useState(false)

  function cadastrar(evento) {
    evento.preventDefault();
    fetch(process.env.REACT_APP_BACKEND + "produtos ", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(

        {
          titulo: titulo,
          ano: ano,
          descricao: descricao,
          imagem: imagem,
          usuario: localStorage.getItem("usuario")
        }
      )
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        if (json.titulo) {
          setCadastro(true);
        } else {
          setErro(true);
        }
      })
      .catch((erro) => { setErro(true) })
  }
  useEffect(() => {
    setTitulo("");
    setAno("");
    setDescricao("");
    setImagem("");
    setCadastro(false)
  }, [cadastro]);

  const navigate = useNavigate();

  useEffect(() => {
    if (cadastro) {
      localStorage.setItem("Produto", JSON.stringify({ titulo: titulo }))
      setTitulo("");
      setAno("");
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
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              margin="normal"
              fullWidth>
            </TextField>
            
            <TextField
              type="text"
              variant="filled"
              label="Preço:"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
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