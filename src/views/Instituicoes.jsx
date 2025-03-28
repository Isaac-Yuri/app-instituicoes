import React, { useEffect, useState } from 'react';
import Tabela from '../components/Tabela';
import { Button, Form } from 'react-bootstrap';
import ModalAdd from '../components/ModalAdd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Instituicoes = () => {
    const [instituicoes, setInstituicoes] = useState([]);
    const [termoBusca, setTermoBusca] = useState('');
    const [instituicoesFiltradas, setInstituicoesFiltradas] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const notify = () => toast.success('Instituição adicionada com sucesso!');

    useEffect(() => {
        fetch('http://localhost:3000/instituicoes/')
            .then(response => response.json())
            .then(data => {
                setInstituicoes(data);
                setInstituicoesFiltradas(data);
            });
    }, [instituicoes]);

    const handleBusca = (e) => {
        const termo = e.target.value.toLowerCase();
        setTermoBusca(termo);
        setInstituicoesFiltradas(
            instituicoes.filter(inst =>
                inst.no_entidade.toLowerCase().includes(termo) ||
                inst.no_municipio.toLowerCase().includes(termo) ||
                inst.no_uf.toLowerCase().includes(termo)
            )
        );
    };

    const handleAdicionar = () => {
        setShowModal(true);
    };

    const handleFecharModal = () => {
        setShowModal(false);
    };

    const handleSave = (novaInstituicao) => {
        fetch('http://localhost:3000/instituicoes/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novaInstituicao)
        })
        .then(response => response.json())
        .then(data => {
            setInstituicoes([...instituicoes, data]);
            setInstituicoesFiltradas([...instituicoesFiltradas, data]);
            notify();
            handleFecharModal();
        });
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Instituições</h1>
            <div className="d-flex justify-content-between mb-3">
                <Form.Control
                    type="text"
                    placeholder="Buscar instituição..."
                    value={termoBusca}
                    onChange={handleBusca}
                    className="w-50"
                />
                <Button variant="success" onClick={handleAdicionar}>Adicionar Instituição</Button>
            </div>
            <Tabela dados={instituicoesFiltradas} setInstituicoes={setInstituicoes} />

            <ModalAdd
                show={showModal}
                handleClose={handleFecharModal}
                handleSave={handleSave}
                notify={notify}
            />

            <ToastContainer />
        </div>
    );
};

export default Instituicoes;
