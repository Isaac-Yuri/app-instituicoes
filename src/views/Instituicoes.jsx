import React, { useEffect } from 'react';
import Tabela from '../components/Tabela';

const Instituicoes = () => {
    const [instituicoes, setInstituicoes] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/instituicoes/').then((response) => {
            response.json().then((data) => {
                setInstituicoes(data);
            });
        });
    }, []);
    
    return (
        <div>
            <h1>Instituições</h1>
            <Tabela dados={instituicoes} />
        </div>
    );
};

export default Instituicoes;