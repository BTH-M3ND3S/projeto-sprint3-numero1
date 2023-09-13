import { Alert, Grid, Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repitasenha, setRepitaSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [cadastro, setCadastro] = useState(false);
  const [erro, setErro] = useState(false)

  function cadastrar(evento) {
    evento.preventDefault();
    fetch(process.env.REACT_APP_BACKEND + "users", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(

        {
          nome: nome,
          email: email,
          senha: senha,
          repitasenha: repitasenha,
          telefone: telefone,
          cpf: cpf,
        }
      )
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        if (json.cpf) {
          setCadastro(true);
        } else {
          setErro(true);
        }

      })
      .catch((erro) => { setErro(true) })
  }
  useEffect(() => {
    setNome("");
    setEmail("");
    setSenha("");
    setRepitaSenha("");
    setTelefone("");
    setCpf("");
    setCadastro(false)
  }, [cadastro]);

  const navigate = useNavigate();

  useEffect(() => {
    if (cadastro) {
      localStorage.setItem("usuario", JSON.stringify({ email: email }))
      setNome("");
      setEmail("");
      setSenha("");
      setTelefone("");
      setCpf("");
      navigate("");
    }
  }, [cadastro]);

  return (

    <Container component="section" maxWidth="sm">
      <Box sx={{
        mt: 30,
        backgroundColor: "#C4C4C4",
        padding: "50px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Typography component="h1" variant='h3'>Cadastrar</Typography>

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
            type="Email"
            variant="filled"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            fullWidth>
          </TextField>
          <TextField
            type="Password"
            variant="filled"
            label="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            margin="normal"
            fullWidth>
          </TextField>
          <TextField
            type="Password"
            variant="filled"
            label=" repita a Senha"
            value={repitasenha}
            onChange={(e) => setRepitaSenha(e.target.value)}
            margin="normal"
            fullWidth>
          </TextField>
          <TextField
            type="tel"
            variant="filled"
            label="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            margin="normal"
            fullWidth>
          </TextField>
          <TextField
            type="text"
            variant="filled"
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            margin="normal"
            fullWidth>
          </TextField>
          <Button type='submit' variant='contained' fullWidth sx={{ mt: 2, mb: 2 }}>Cadastrar</Button>
          <Grid color="blue" item>
            Já Possui Cadastro?
          </Grid>
        </Box>


      </Box>


    </Container>

  )
}

export default Cadastro;