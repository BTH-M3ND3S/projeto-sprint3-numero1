import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React from 'react'

function Filme(props) {
  return (
    <Card sx={{ maxWidth:345 }}>
        <CardActionArea>
            <CardMedia 
            component="img"
            height="140"
            image={props.imagem }
            alt={ props.titulo }
            />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.titulo}
                    </Typography>
                  <Typography  variant="body2" color="text.secondary">
                    {props.descricao}
                  </Typography>
                  <Grid item xs={2}>
                    <span>{props.categoria}</span>
                  </Grid>
                  <Grid item xs={2}>
                    <span>{props.ano}</span>
                  </Grid>
                  <Grid item xs>
                    <span>{props.duracao}</span>
                  </Grid>
                </CardContent>
        </CardActionArea>
        <button onClick={props.excluir}>Excluir </button>
        <Link href={ "edicao/" + props.id}>Editar</Link>
    </Card>
  )
}

export default Filme;