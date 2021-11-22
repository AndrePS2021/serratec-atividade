import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AlunosListagem from './pages/alunos/AlunosListagem';
import { BrowserRouter, useRoutes } from "react-router-dom";
import NavBar from './components/NavBar';
import Container from '@mui/material/Container';
import CadastrarAlunos from "./pages/alunos/CadastrarAlunos";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element:  <AlunosListagem /> },
    { path: "/cadastrar-alunos", element: <CadastrarAlunos /> }
  ]);

  return routes;
}

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <NavBar />
   <Container maxWidth="md">
   <Routes />
   </Container>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

