import React from "react";

function detalhesdoproduto() {
  return (
    <>
    <Grid container spacing={1} >
                    {products.map((product) => (
                        <Grid item xs={20} sm={6} md={4} key={product.id} style={{ color: 'white' }}>
                            <Card style={{ color: 'white' }}>
                                <CardMedia
                                    component="img"
                                    alt={product.name}
                                    style={{ width: '400px', height: '380px', }}
                                    image={product.image}
                                    title={product.name}
                                />
                                <CardContent style={{ color: 'white' }}>
                                    <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="white">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6" color="white">
                                        R${product.price.toFixed(2)}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => addToDatabase(product)}
                                    >
                                        Adicionar ao Banco de Dados
                                    </Button>
                                    <Typography component="legend">Avalie!</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={avalie}
                                        onChange={(event, newValue) => {
                                            setAvalie(newValue);
                                        }}
                                    />
                                    <Button variant="contained" color="primary">Ver Detalhes</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
    </>
  )

}
export default detalhesdoproduto;