import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Socials from './Socials';

const ContactForm = () => {
  return (
    <div className="form-container">
      <form
        name="Formulário de Contato"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/sucesso"
      >
        <input type="hidden" name="form-name" value="Formulário de Contato" />

        <div className="form-input-container">
          <label htmlFor="name">
            Nome
            <input id="name" name="name" type="text" />
          </label>
        </div>

        <div className="form-input-container">
          <label htmlFor="email">
            Email
            <input id="email" name="email" type="email" />
          </label>
        </div>

        <div className="form-input-container">
          <label htmlFor="assunto">
            Assunto
            <input id="assunto" name="assunto" type="text" />
          </label>
        </div>

        <div className="form-input-container">
          <label htmlFor="message">
            Mensagem
            <textarea id="message" name="message" type="text" />
          </label>
        </div>

        <button type="submit" className="button button-large form-button">
          Enviar
        </button>
      </form>

      <div className="form-info-container">
        <Socials />

        <h3 className="footer-title">Ou nos envie um email</h3>
        <a href="mailto:seiva.ambientaljr@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>seiva.ambientaljr@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
