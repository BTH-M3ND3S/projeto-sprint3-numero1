import { Box, Container, TextField, Grid, Button, Alert } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Filme(produto) {
    const { id } = useParams();
    console.log(id);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ano, setAno] = useState("");
    const [imagem, setImagem] = useState("");
    const [editar, setEditar] = useState(false);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        const usuario = localStorage.getItem("usuario")
        fetch(process.env.REACT_APP_BACKEND + "produtos/"+ usuario + "/" + id  , {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((resposta) => resposta.json())
            .then((json) => {
                if (!json.status) {
                    setTitulo(json.titulo);
                    setDescricao(json.descricao);
                    setAno(json.ano);
                    setImagem(json.imagem);
                } else {
                    setErro("filme não encontrado");
                }
            })

            .catch((erro) => { setErro(true) })
    }, [])

    function Editar(evento) {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "produtos" , {
            method: "PUT",
            headers: {
              'Content-type' : 'application/json'
            },
            body: JSON.stringify(
              {
                  id: id,
                  titulo: titulo,
                  descricao: descricao,
                  ano: ano,
                  imagem:imagem,
                  categoria:"",
                  duracao:"",
                  usuario: localStorage.getItem("usuario")
              }
            )
          })
          .then( (resposta) => resposta.json())
          .then( (json) => {  
            if( json.titulo) {
              setEditar ( true );
              setErro( false );
            }else{
              setErro( true);
              setEditar( false);
            }})
          .catch( (erro ) => { setErro( true)})
    }


    return (
        <Container>

            <Box sx={{
                mt: 30,
                backgroundColor: "#C4C4C4",
                padding: "50px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {erro && (<Alert severity="warning" sx={{ mt: 2, mb: 2 }}>{erro}</Alert>)}
                {editar && (<Alert severity="success" sx={{ mt: 2, mb: 2 }}>filme editado com sucesso!</Alert>)}
                <Box component="form" onSubmit={(Editar)}>
                    <TextField
                        type="text"
                        variant="filled"
                        label="Titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        margin="normal"
                        fullWidth>
                    </TextField>
                    <TextField
                        type="text"
                        variant="filled"
                        label="descrição"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        margin="normal"
                        fullWidth>
                    </TextField>
                    <TextField
                        type="number"
                        variant="filled"
                        label="ano"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        margin="normal"
                        fullWidth>
                    </TextField>
              
                    <TextField
                        type="text"
                        variant="filled"
                        label="Url da imgam"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
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

export default Filme;