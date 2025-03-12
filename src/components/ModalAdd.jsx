import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const ModalAdd = ({ show, handleClose, handleSave, novaInstituicao, setNovaInstituicao }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Instituição</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Nome da Instituição</Form.Label>
                        <Form.Control
                            type="text"
                            value={novaInstituicao.no_entidade}
                            onChange={(e) => setNovaInstituicao({ ...novaInstituicao, no_entidade: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Município</Form.Label>
                        <Form.Control
                            type="text"
                            value={novaInstituicao.no_municipio}
                            onChange={(e) => setNovaInstituicao({ ...novaInstituicao, no_municipio: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>UF</Form.Label>
                        <Form.Control
                            type="text"
                            value={novaInstituicao.no_uf}
                            onChange={(e) => setNovaInstituicao({ ...novaInstituicao, no_uf: e.target.value })}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="success" onClick={handleSave}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAdd;
