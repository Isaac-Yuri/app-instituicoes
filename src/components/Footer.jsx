import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Sobre o Projeto</h5>
          <p>Este projeto tem como objetivo gerenciar e organizar as informações das instituições cadastradas.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links Úteis</h5>
          <ul className="list-unstyled">
            <li><a href="#!">Sobre nós</a></li>
            <li><a href="#!">Contato</a></li>
            <li><a href="#!">Termos de Serviço</a></li>
            <li><a href="#!">Política de Privacidade</a></li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Redes Sociais</h5>
          <ul className="list-unstyled">
            <li><a href="#!">Facebook</a></li>
            <li><a href="#!">Twitter</a></li>
            <li><a href="#!">LinkedIn</a></li>
            <li><a href="">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2025 Copyright: <a href="https://github.com/Isaac-Yuri">Isaac Yuri</a>
    </div>
  </footer>
);

export default Footer;
