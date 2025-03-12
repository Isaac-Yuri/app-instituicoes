import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

const Tabela = ({ dados }) => {
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
                                <button className="btn btn-primary">
                                    <MdModeEdit size={20} />
                                </button>
                                <button className="btn btn-danger">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tabela;