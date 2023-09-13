import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './login';
import Cadastro from "./components/cadastro";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Filmes from "./filmes"
import EditaFilme from './components/EditaFilme';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3facb5',
    },
    secondary: {
      main: '#ff0004',
    },
    error: {
      main: '#ff0000',
    },
    warning: {
      main: '#fffe00',
    },
  },
});

  const router = createBrowserRouter(
    [
      {
        path:"/",
        element: <App/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/filmes",
        element: <Filmes />
      },
      {
        path: "/Edicao/:id",
        element: <EditaFilme/>
      }
    ]
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <RouterProvider router={router}/>
  </ThemeProvider>
);


