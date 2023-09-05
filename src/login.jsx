import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

    const theme = createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#3facb5',
        },
        secondary: {
          main: '#ff0004',
        },
        error: {
          main: '#ff0000',
        },
        warning: {
          main: '#fffe00',
        },
      },
    });

function Login() {

  const [ email, setEmail ] = useState( "" );
  const [ senha, setSenha ] = useState( "" );
  const [ erro, setErro ] = useState( false );
  const [ lembrar, setLembrar ] = useState( false );
  const [ login, setLogin ] = useState( false );

  const navigate = useNavigate();
  useEffect(()=>{
    if(login){
      localStorage.setItem("usuario" , JSON.stringify( {email: email }))
      setEmail("");
      setSenha("");
      navigate("/");
    }

  },[login]);

  function Autenticar(evento){
    evento.preventDefault();
    fetch( "https://api.escuelajs.co/api/v1/auth/login",{
      method: "POST",
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(

        {
          email: email,
          password: senha
        }
      )
    })
    .then( (resposta) => resposta.json())
    .then( (json) => {  
      if( json.statusCode === 401) {
        setErro( true);
      }else{
        setLogin ( true );
      }
      
     })
    .catch( (erro ) => { setErro( true)})
  
  }

  return (
    <ThemeProvider theme={theme}>
    <Container component="section" maxWidth= "xs">
      <Box sx={{
        mt:30,
        backgroundColor: "#C4C4C4",
        padding:"50px",
        borderRadius:"10px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
        <Typography component="h1" variant='h4'>Entrar</Typography>
        <Box component="form" onSubmit={Autenticar}>
          <TextField  
          type="Email" 
          variant="filled" 
          label="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          margin="normal" 
          fullWidth>
          </TextField>
          <TextField  
          type="Password" 
          variant="filled" 
          label="Senha" 
          value={senha}
          onChange={(e)=> setSenha(e.target.value)}
          margin="normal" 
          fullWidth>
          </TextField>
          <FormControlLabel control={ <Checkbox value={lembrar} name='lembrar' onChange={(e)=> setLembrar( !lembrar )} />} label="lembrar-me"></FormControlLabel>
          <Button type='submit' variant='contained' fullWidth sx={{mt:2, mb:2}} >Login</Button>
          <Grid container>
            <Grid item xs>
              Esqueci a Senha
            </Grid>
            <Grid item>
              Cadastrar
            </Grid>
          </Grid>     
        </Box>
      </Box>

    </Container>
    </ThemeProvider>
  )
}

export default Login;