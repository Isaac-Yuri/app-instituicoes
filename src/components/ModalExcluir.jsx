import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalExcluir({ show, handleClose, item, setInstituicoes }) {
  const excluirItem = async () => {
    try {
      const response = await fetch(`http://localhost:3000/instituicoes/${item.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir o item");
      }

      setInstituicoes((prevInstituicoes) => 
        prevInstituicoes.filter((instituicao) => instituicao.id !== item.id)
      );

      toast.success("Instituição excluída com sucesso!");

      handleClose();
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Erro ao excluir a instituição!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmação</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza que deseja excluir este item? Essa ação não pode ser desfeita.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={excluirItem}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalExcluir;
