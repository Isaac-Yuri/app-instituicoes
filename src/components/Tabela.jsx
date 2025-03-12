import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import ModalIns from './ModalIns';
import ModalExcluir from './ModalExcluir';

const Tabela = ({ dados, setInstituicoes }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalExcluir, setShowModalExcluir] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowModalEdit(true);
  };

  const handleExcluir = (item) => {
    setSelectedItem(item);
    setShowModalExcluir(true);
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome Da Instituição</th>
            <th>Municipio</th>
            <th>UF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.no_entidade}</td>
              <td>{item.no_municipio}</td>
              <td>{item.no_uf}</td>
              <td className='d-flex gap-2'>
                <button onClick={() => handleEdit(item)} className="btn btn-primary">
                  <MdModeEdit size={20} />
                </button>
                <button onClick={() => handleExcluir(item)} className="btn btn-danger">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalIns show={showModalEdit} handleClose={() => setShowModalEdit(false)} item={selectedItem} />

      <ModalExcluir 
        show={showModalExcluir} 
        handleClose={() => setShowModalExcluir(false)} 
        item={selectedItem} 
        setInstituicoes={setInstituicoes}
      />
    </div>
  );
};

export default Tabela;
