import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React from 'react'

function Filme(produto) {
  return (
    <Card sx={{ maxWidth:345 }}>
        <CardActionArea>
            <CardMedia 
            component="img"
            height="140"
            image={produto.imagem }
            alt={ produto.nome }
            />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {produto.nome}
                    </Typography>
                  <Typography  variant="body2" color="text.secondary">
                    {produto.descricao}
                  </Typography>
                  <Grid item xs={2}>
                    <span>{produto.preco}</span>
                  </Grid>
                </CardContent>
        </CardActionArea>
        <button onClick={produto.excluir}>Excluir </button>
        <Link href={ "/Editaproduto" + produto.id}>Editar</Link>
    </Card>
  )
}

export default Filme;