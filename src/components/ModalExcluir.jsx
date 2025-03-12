import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalExcluir({ show, handleClose, item, setInstituicoes }) {
  const excluirItem = async () => {
    try {
      const response = await fetch(`https://localhost:3000/instituicoes/${item.id}`, {
        method: 'DELETE',
      }).then((response) => console.log(response.json()));

      if (!response.ok) {
        throw new Error("Erro ao excluir o item");
      }

      setInstituicoes((instituicoes) => 
        instituicoes.filter((instituicao) => instituicao.id !== item.id)
      );

      handleClose();
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao excluir o item");
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
