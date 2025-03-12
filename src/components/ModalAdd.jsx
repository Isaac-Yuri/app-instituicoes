import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';

const ModalAdd = ({ show, handleClose, handleSave, novaInstituicao, setNovaInstituicao, notify }) => {
    const [errors, setErrors] = useState({});

    const schema = Yup.object().shape({
        no_entidade: Yup.string().required('Nome da Instituição é obrigatório'),
        no_municipio: Yup.string().required('Município é obrigatório'),
        no_uf: Yup.string()
            .length(2, 'UF deve ter exatamente 2 caracteres')
            .required('UF é obrigatório')
    });

    const handleSubmit = async () => {
        try {
            await schema.validate(novaInstituicao, { abortEarly: false });
            setErrors({});
            handleSave(novaInstituicao);
            notify();
            setNovaInstituicao({ no_entidade: '', no_municipio: '', no_uf: '' });
            handleClose();
        } catch (err) {
            const validationErrors = {};
            err.inner.forEach(error => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
        }
    };

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
                            isInvalid={!!errors.no_entidade}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.no_entidade}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Município</Form.Label>
                        <Form.Control
                            type="text"
                            value={novaInstituicao.no_municipio}
                            onChange={(e) => setNovaInstituicao({ ...novaInstituicao, no_municipio: e.target.value })}
                            isInvalid={!!errors.no_municipio}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.no_municipio}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>UF</Form.Label>
                        <Form.Control
                            type="text"
                            value={novaInstituicao.no_uf}
                            onChange={(e) => setNovaInstituicao({ ...novaInstituicao, no_uf: e.target.value })}
                            isInvalid={!!errors.no_uf}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.no_uf}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="success" onClick={handleSubmit}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAdd;
