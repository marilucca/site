import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Socials from './Socials';

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row px-16">
      <form
        className="flex-1 md:mr-16"
        name="Formulário de Contato"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/sucesso"
      >
        <input type="hidden" name="form-name" value="Formulário de Contato" />

        <div className="mb-4">
          <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="name">
            Nome
            <input
              className="shadow w-full apperance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="email">
            Email
            <input
              className="shadow w-full apperance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="assunto">
            Assunto
            <input
              className="shadow w-full apperance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="assunto"
              name="assunto"
              type="text"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="message">
            Mensagem
            <textarea
              className="
                    shadow 
                    w-full 
                    apperance-none 
                    border 
                    rounded 
                    py-2 
                    px-3 
                    text-gray-700 
                    leading-tight 
                    focus:outline-none 
                    focus:shadow-outline
                "
              style={{ minHeight: 300 }}
              id="message"
              name="message"
              type="text"
            />
          </label>
        </div>

        <button
          type="submit"
          className="
            bg-primary-default
            hover:bg-primary-darker
            border-solid
            border-4
            border-primary-default
            hover:border-primary-darker
            rounded
            text-white
            hover:text-white
            font-bold
            py-4 px-12
            w-full
            "
        >
          Enviar
        </button>
      </form>

      <div className="flex flex-col mt-8 md:mt-0 justify-start items-start">
        <Socials />

        <h3 className="footer-title text-left mt-4 mb-4">Ou nos envie um email</h3>
        <a href="mailto:seiva.ambientaljr@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
          seiva.ambientaljr@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
