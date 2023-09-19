import React from 'react';
import { Button, Container, CssBaseline, Typography } from '@mui/material';

function App() {
  // URL para a página que você deseja redirecionar
  const linkParaSite = 'localhost:3000/Home';

  const redirecionarParaSite = () => {
    window.location.href = linkParaSite;
  };

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '100px' }}>
      <CssBaseline />
      <Typography variant="h4" component="div" gutterBottom>
        Bem-vindo à Loja de Instrumentos Musicais
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Encontre os melhores instrumentos musicais aqui!
      </Typography>

      <Button variant="contained" color="primary" ><a style={{ color: 'white', textDecoration: 'none' }} href="http://localhost:3000/Home">Entrar</a>
      </Button>
    </Container>
  );
}

export default App;
