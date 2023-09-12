import React from 'react'
import { Autocomplete, Alert, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react';




function Filmes() {

    const [ titulo, setTitulo ] = useState("");
    const [ descricao, setDescricao ] = useState( "" );
    const [ ano, setAno ] = useState( "" );
    const[ duracao, setDuracao] = useState("");
    const [ categoria, setCategoria ] = useState( "" );
    const [ imagem, setImagem ] = useState( "" );
    const [ mandarfilme, setMandarfilme ] = useState( false );
    const[ erro, setErro] = useState(false)

    const top100Films = [ 
        { label: 'Ação'  },
        { label: 'Aventura' },
        { label: 'Terror'  },
        { label: 'Luta'  },
        { label: 'Suspense' },
        ,
      ];
    function mandarfilmeprobanco( evento ) {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "filmes" , {
      method: "POST",
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(
        {
            titulo: titulo,
            descricao: descricao,
            ano: ano,
            duracao:duracao,
            categoria:categoria,
            imagem:imagem,
        }
      )
    })
    .then( (resposta) => resposta.json())
    .then( (json) => {  
      if( json._id) {
        setMandarfilme ( true );
        setErro( false );
      }else{
        setErro( true);
        setMandarfilme( false);
      }
      
     })
    .catch( (erro ) => { setErro( true)})
    }
    
     return (
        <Container component="section" maxWidth= "40em">
        <Box sx={{
            mt:30,
            backgroundColor: "#C4C4C4",
            padding:"50px",
            borderRadius:"10px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
            }}>
                <Typography component="h1" variant='h3'>Cadastrar um filme</Typography>

                { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2}}>Desculpe tente novamente, por favor.</Alert>) }
                { mandarfilme && ( <Alert severity="success" sx={{ mt: 2, mb: 2}}>Obrigado por cadastrar o seu filme!.</Alert>) }

                <Box component="form" onSubmit={mandarfilmeprobanco}>
                    <TextField 
                    type="text" 
                    variant="filled" 
                    label="titulo"
                    value={titulo}
                    onChange={(e)=> setTitulo(e.target.value)}
                    margin="normal" 
                    fullWidth>
                    </TextField>
                    <TextField 
                    type="text" 
                    variant="filled" 
                    label="Descrição:" 
                    value={descricao}
                    onChange={(e)=> setDescricao(e.target.value)}
                    margin="normal" 
                    fullWidth>
                    </TextField>
                    <TextField 
                    type="number" 
                    variant="outlined" 
                    label="Ano" 
                    value={ano}
                    onChange={(e)=> setAno(e.target.value)}
                    margin="normal" 
                    fullWidth>
                    </TextField>
                    <TextField  
                    type="text" 
                    variant="filled" 
                    label="Duração" 
                    value={duracao} 
                    onChange={(e)=> setDuracao(e.target.value)}
                    margin="normal" 
                    fullWidth>
                    </TextField>
                    <Autocomplete
                    fullWidth
                    disablePortal
                    id="combo-box-demo"
                    value={categoria}
                    onChange={(e)=> setCategoria(e.target.value)}
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                    />
                    <TextField  
                    type="text" 
                    variant="filled" 
                    label="Imagem" 
                    value={imagem}
                    onChange={(e)=> setImagem(e.target.value)}
                    margin="normal" 
                    fullWidth>
                    </TextField>
                    
                    <Button type='submit' variant='contained' fullWidth sx={{mt:2, mb:2}}>Mandar filme</Button>
                </Box>
        
        
        </Box>
        

    </Container>
  )
}

export default Filmes;