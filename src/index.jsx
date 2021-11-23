import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AlunosListagem from './pages/alunos/AlunosListagem';
import MateriasListagem from './pages/materias/MateriasListagem';
import { BrowserRouter, useRoutes } from "react-router-dom";
import NavBar from './components/NavBar';
import Container from '@mui/material/Container';
import CadastrarAlunos from "./pages/alunos/CadastrarAlunos";
import CadastrarMaterias from "./pages/materias/CadastrarMaterias";
import Home from './pages/home/Home';


const Routes = () => {
  const routes = useRoutes([
    { path: "/", element:  <Home /> },
    { path: "/listagem-alunos", element: <AlunosListagem /> },
    { path: "/listagem-materias", element: <MateriasListagem /> },
    { path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
    { path: "/cadastrar-materias", element: <CadastrarMaterias /> }
    
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

