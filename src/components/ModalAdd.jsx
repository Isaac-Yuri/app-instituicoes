import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';

const schema = Yup.object().shape({
    no_entidade: Yup.string().required('Nome da Instituição é obrigatório'),
    no_municipio: Yup.string().required('Município é obrigatório'),
    no_uf: Yup.string()
        .length(2, 'UF deve ter exatamente 2 caracteres')
        .required('UF é obrigatório')
});

const ModalAdd = ({ show, handleClose, handleSave}) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Instituição</Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={{ no_entidade: '', no_municipio: '', no_uf: '' }}
                validationSchema={schema}
                onSubmit={(values, { resetForm }) => {
                    handleSave(values);
                    resetForm();
                    handleClose();
                }}
            >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Nome da Instituição</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="no_entidade"
                                    value={values.no_entidade}
                                    onChange={handleChange}
                                    isInvalid={touched.no_entidade && errors.no_entidade}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.no_entidade}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Município</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="no_municipio"
                                    value={values.no_municipio}
                                    onChange={handleChange}
                                    isInvalid={touched.no_municipio && errors.no_municipio}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.no_municipio}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>UF</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="no_uf"
                                    value={values.no_uf}
                                    onChange={handleChange}
                                    isInvalid={touched.no_uf && errors.no_uf}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.no_uf}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="success" type="submit">
                                Salvar
                            </Button>
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default ModalAdd;
