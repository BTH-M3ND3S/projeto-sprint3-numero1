import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function MiniHeader() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#3D3A3A' }}>
      <Toolbar>
        <a style={{ color: 'white', textDecoration: 'none' }} href="http://localhost:3000/Home"><Box
          sx={{
            '& > :not(style)': {
              m: 2,
            },
          }}
        >
          <HomeIcon sx={{ fontSize: 40 }} />
        </Box> </a>
      </Toolbar>
    </AppBar>
  );
}

export default MiniHeader;