import { useRoutes } from "react-router-dom";
import AlunosListagem from '../pages/alunos/AlunosListagem';
import MateriasListagem from '../pages/materias/MateriasListagem';
import CadastrarAlunos from "../pages/alunos/CadastrarAlunos";
import CadastrarMaterias from "../pages/materias/CadastrarMaterias";
import Container from '@mui/material/Container';
import { useContext } from "react";
import { TemaContext } from "../context";
import tema from "../tema";
import Login from "../pages/Login";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/cadastrar-materias", element: <CadastrarMaterias /> },
    { path: "/listagem-materias", element: <MateriasListagem />},
    { path: "/editar-materias/:id", element: <CadastrarMaterias /> },
    { path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
    { path: "/listagem-alunos", element: <AlunosListagem /> },
    { path: "/editar-alunos/:id", element: <CadastrarAlunos /> }
    
  ]);

  return routes;
};

const App = () => {
  const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext);
  // tema.claro ou tema["claro"] fazem a mesma coisa
  return (
    <Container maxWidth="md" sx={tema[temaSelecionado]}>
      <Routes />
    </Container>
  );
};

export default App;
