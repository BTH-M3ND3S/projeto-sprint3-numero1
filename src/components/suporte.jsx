// src/components/SupportForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Header2 from './header2';

function Suporte() {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMessage] = useState('');

  const enviarsuporte = async (e) => {
    e.preventDefault();

    // Dados a serem enviados ao servidor
    const data = {
      nome,
      email,
      mensagem,
    };

    // Configurar a solicitação POST
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      // Enviar a solicitação POST para o servidor (substitua a URL do seu backend)
      const response = await fetch('URL_DO_SEU_BACKEND', requestOptions);

      if (response.ok) {
        alert('Pedido de suporte enviado com sucesso!');
        // Limpar o formulário
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Erro ao enviar o pedido de suporte.');
      }
    } catch (error) {
      alert('Erro ao enviar o pedido de suporte.');
    }
  };

  return (
    <>
      <Header2 /><br /><br />
      <Container maxWidth="lg" style={{ paddingTop: '100px', backgroundColor: 'gray', textAlign: 'center', paddingBottom: '30px' }} >
        <Typography variant="h4" align="center" gutterBottom style={{ color: 'white' }}>
          Formulário de Suporte
        </Typography>
        <form onSubmit={enviarsuporte} style={{ textAlign: 'center' }}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={nome}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Mensagem"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={mensagem}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Box mt={2}>
            <Button

              type="submit"
              variant="contained"
              color="primary"
            >
              Enviar
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default Suporte;
