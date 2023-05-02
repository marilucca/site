import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Socials from './Socials';
import {
  container,
  inputContainer,
  formButton,
  infoContainer,
} from '../css/components/ContactForm.module.css';
import { button, buttonLarge } from '../css/components/Button.module.css';

export default function ContactForm() {
  return (
    <div className={container}>
      <form
        name="Formulário de Contato"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/sucesso"
      >
        <input type="hidden" name="form-name" value="Formulário de Contato" />

        <div className={inputContainer}>
          <label htmlFor="name">
            Nome
            <input id="name" name="name" type="text" />
          </label>
        </div>

        <div className={inputContainer}>
          <label htmlFor="email">
            Email
            <input id="email" name="email" type="email" />
          </label>
        </div>

        <div className={inputContainer}>
          <label htmlFor="assunto">
            Assunto
            <input id="assunto" name="assunto" type="text" />
          </label>
        </div>

        <div className={inputContainer}>
          <label htmlFor="message">
            Mensagem
            <textarea id="message" name="message" type="text" />
          </label>
        </div>

        <button type="submit" className={`${button} ${buttonLarge} ${formButton}`}>
          Enviar
        </button>
      </form>

      <div className={infoContainer}>
        <Socials />

        <h3 className="footer-title">Ou nos envie um email</h3>
        <a href="mailto:contato@seivajr.com.br">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>seiva.ambientaljr@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
