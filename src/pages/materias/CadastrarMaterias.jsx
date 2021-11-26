import axios from "axios";
import { useEffect, useState } from "react";
import { Form, InputCadastro, ButtonCadastro } from "../../components/Cadastros"
import { API_URL_MATERIAS } from "../../Constants";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useParams } from "react-router";

const CadastrarMaterias = () => {
    const { id } = useParams();
    const MySwal = withReactContent(Swal);
   
    const valorInicial = id ? "" : null;
     const [titulo, setTitulo] = useState(valorInicial);
     const [professor_nome, setProfessor] = useState(valorInicial);

     useEffect(()=> {
        getMaterias()
      }, []);

      const getMaterias = () => {
        axios.get(API_URL_MATERIAS).then((response) => {
          response.data.forEach(materia => {
            // eslint-disable-next-line eqeqeq
            if (materia.id == id) {
              setTitulo(materia.titulo);
              setProfessor(materia.professor_nome);
            }
          })
        });
      };    
     
 const cadastrarMaterias = () => {
     if (id) {
     axios.put(API_URL_MATERIAS, {
        id, 
        titulo,
         professor_nome
       }).then(response => {
         console.log(response);
         if (response.status === 200) {
             MySwal.fire(<p>{response?.data?.message}</p>);
             limparCampos();      
         }
     }).catch(error =>{
             MySwal.fire({
             icon: 'error',
             title: 'Oops...',
             text: error,
         })
     });
 } else {
    axios
    .post(API_URL_MATERIAS, {
        titulo,
        professor_nome
      })
      .then(response => {
        if (response.status === 201) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();      
        }
    }).catch(error =>{
            MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
        })
    });
   }
 };

 const limparCampos = () => {
     setTitulo("");
     setProfessor("");
     
 };
     return (
     <Form>
     <InputCadastro 
       label="Titulo" 
       variant="outlined"
       value={titulo} 
       onChange={(e) => setTitulo(e.target.value) } 
     />
     <InputCadastro 
       label="Professor" 
       variant="outlined" 
       value={professor_nome}
       onChange={(e) => setProfessor(e.target.value) }
     />
         
     <ButtonCadastro variant="contained" onClick={cadastrarMaterias} >
         {id ? 'Editar' : 'Cadastrar'}
         </ButtonCadastro>
     </Form>
     );
 };
 
 export default CadastrarMaterias;