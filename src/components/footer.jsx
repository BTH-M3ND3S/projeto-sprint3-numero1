import React from 'react'
import { Box, Typography } from '@mui/material'

function footer() {
  return (
    <Box style={{ display: 'flex', backgroundColor: '#333', textAlign: 'center', justifycontent: 'space-between' }}>
      <Box style={{ display: 'flex', }}>
        <Typography variant="body1" style={{ color: '#fff', paddingRight: '1rem', paddingTop: '40px', }}>
          © {new Date().getFullYear()} Mateus Mendes Silvério
        </Typography>
        <Typography variant="body1" style={{ color: 'white', paddingLeft: '1rem', height: '50px', paddingTop: '40px', fontSize:'15px' }}>
          <a style={{ color: 'white', }} href="http://localhost:3000/Cadastrarproduto">Não encontrou o que você procura? Clique aqui e cadastre o seu na loja aberta. </a>
        </Typography>
        <ul  style={{ listStyle:"none",paddingTop:'18px', fontSize:'20px'  }}>
          <li >
            <a style={{color:'white', textDecoration:'none', }} href="http://localhost:3000/suporte">Suporte</a>
          </li>
        </ul>

      </Box>
    </Box>
  )
}

export default footer