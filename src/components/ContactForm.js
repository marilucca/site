import React, { useState, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import * as qs from 'query-string'
import Socials from "./Socials"

const ContactForm = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const data = {
        name,
        email,
        assunto,
        message,
    }

    const axiosConfig = {
        url: '/',
        method: 'post',
        headers: { "Content=Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(formData)
    }

    axios(axiosConfig)
        .then(response => {
            setFormState('success');
            setName('');
            setEmail('');
            setAssunto('');
            setMessage('');

            formRef.current.reset();
        })
        .catch(err => {
            setFormState('error');
        })
  };

    return (
      <div className="flex px-16">
          <form ref={formRef} className="flex-1 mr-16" name="Formulário de Contato" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="Formulário de Contato" />

            <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2 text-left" for="name">Nome</label>
            <input 
                className="shadow w-full apperance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            </div>

            <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2 text-left" for="email">Email</label>
            <input 
                className="shadow w-full apperance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            </div>

            <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2 text-left" for="assunto">Assunto</label>
            <input 
                className="shadow w-full apperance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="assunto"
                name="assunto"
                type="text"
                value={assunto}
                onChange={e => setAssunto(e.target.value)}
            />
            </div>

            <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2 text-left" for="message">Mensagem</label>
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
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            </div>

            <button type="submit" className="
            bg-primary
            hover:bg-primary-darker
            border-solid
            border-4
            border-primary
            hover:border-primary-darker
            rounded
            text-white
            hover:text-white
            font-bold
            py-4 px-12
            w-full
            ">Enviar</button>
        </form>

        <div className="flex flex-col justify-start">
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
