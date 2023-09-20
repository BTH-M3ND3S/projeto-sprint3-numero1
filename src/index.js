import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './login';
import Cadastro from "./cadastro";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './Home'
import CadastrarProduto from './Cadastrarproduto'
import Suporte from './suporte';
import LojaAberta from './lojaberta'
import EditaProduto from './editaproduto'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#2a89ff',
    },
    text: {
      hint: '#3d1fce',
      disabled: 'rgba(255,0,0,0.38)',
      secondary: 'rgba(255,255,255,0.7)',
      primary: '#ffffff',
    },

  },
});

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/Home",
      element: <Home />
    },
    {
      path: "/Cadastrarproduto",
      element: <CadastrarProduto />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/cadastro",
      element: <Cadastro />
    },
    {
      path: "/suporte",
      element: <Suporte />
    },
    {
      path: "/lojaAberta",
      element: < LojaAberta/>
    },
    {
    path: "/Editaproduto/:id",
    element: < EditaProduto/>
    },


  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);



