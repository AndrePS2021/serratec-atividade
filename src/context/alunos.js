import { createContext, useState } from "react";

const estadoInicial = {
    alunos: [],
    setAlunos: () => {},
};

const AlunoContext = createContext(estadoInicial);

const AlunoProvider = ({ children }) => {
    const [alunos, setAlunos] = useState([]);

    return (
        <AlunoContext.Provider 
          value={{
            alunos,
            setAlunos,
        }}
        >
            {children}
        </AlunoContext.Provider>
    );
};

export { AlunoProvider };
export default AlunoContext;