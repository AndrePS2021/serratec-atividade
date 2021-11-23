import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
         
          <Link to="/">
            Home
          </Link>
          </IconButton>
          <Link to="./cadastrar-alunos">
          <Button color="inherit">Cadastro de Aluno</Button>
          </Link>
          <Link to="./listagem-alunos">
          <Button color="inherit">Listar Alunos</Button>
          </Link>
          <Link to="./cadastrar-materias">
          <Button color="inherit">Cadastro de Materia</Button>
          </Link>
          <Link to="./listagem-materias">
          <Button color="inherit">Listar Materias</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
