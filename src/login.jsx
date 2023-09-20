import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header2 from './components/header2'




function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [lembrar, setLembrar] = useState(false);
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  /* se houver mudança no login, as informações de usuário serão transformadas em json e salvas no local storage e os campos email e senha serão limpos, e o usuário será redirecionado para a página principal */
  useEffect(() => {
    if (login) {
      setEmail("");
      setSenha("");
      navigate("/Home");  
    }
  }, [login]);

  function Autenticar(evento) {
    evento.preventDefault();
    fetch(process.env.REACT_APP_BACKEND + "login", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(

        {
          email: email,
          senha: senha
        }
      )
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        if (json.user) {
          localStorage.setItem( "usuario" , JSON.stringify(json.user._id))
          setLogin(true);

        } else {
          localStorage.removeItem("usuario")
          setErro(true);
        }

      })
      .catch((erro) => { setErro(true) })
  }

  return (
    <>
      <Header2/>
      <Container component="section" maxWidth="xs">
        <Box sx={{
          mt: 10,
          backgroundColor: "gray",
          padding: "50px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Typography component="h1" variant='h4'>Entrar</Typography>
          {erro && (<Alert severity="warning">Revise seus dados e tente novamente.</Alert>)}
          <Box component="form" onSubmit={Autenticar}>
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
            <FormControlLabel control={<Checkbox value={lembrar} name='lembrar' onChange={(e) => setLembrar(!lembrar)} />} label="lembrar-me"></FormControlLabel>
            <Button type='submit' variant='contained' fullWidth sx={{ mt: 2, mb: 2 }} >Login</Button>
            <Grid container>
              <Grid item xs>
                Esqueci a Senha
              </Grid>
              <Grid item>
                <button style={{ border: 'none', background: 'none' }}><a style={{ color: 'white' }} href="http://localhost:3000/cadastro">Cadastrar-se</a></button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}
export default Login;