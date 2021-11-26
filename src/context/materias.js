import { createContext, useState } from "react";

const estadoInicial = {
    materias: [],
    setMaterias: () => {},
};

const MateriaContext = createContext(estadoInicial);

const MateriaProvider = ({ children }) => {
    const [materias, setMaterias] = useState([]);

    return (
        <MateriaContext.Provider 
          value={{
            materias,
            setMaterias,
        }}
        >
            {children}
        </MateriaContext.Provider>
    );
};

export { MateriaProvider };
export default MateriaContext;