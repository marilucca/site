import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import axios from 'axios'
import * as qs from 'query-string'

const ContactForm = () => {
    const data = useStaticQuery(graphql`
  query ContactFormQuery {
    site {
      siteMetadata {
        social {
          facebook
          instagram
          linkedin
        }
      }
    }
  }
  `)

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

  const social = data.site.siteMetadata?.social

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

        <div>
            <p className="font-md font-bold text-left mb-4">Nos encontre em nossas redes sociais</p>
            <a className="flex mb-2 font-bold" href={`https://instagram.com/${social?.instagram || ``}`}>
                <StaticImage src="../../static/images/instagram.png" alt="Logo Instagram" width={24} height={24} layout="fixed" />
                <p className="ml-2">@{social.instagram}</p>
            </a>
            <a className="flex mb-2 font-bold" href={`https://facebook.com/${social?.facebook || ``}`}>
                <StaticImage src="../../static/images/facebook.png" alt="Logo Facebook" width={24} height={24} layout="fixed" />
                <p className="ml-2">@{social.facebook}</p>
            </a>
            <a className="flex font-bold mb-6" href={`https://pt.linkedin.com/company/${social?.linkedin || ``}`}>
                <StaticImage src="../../static/images/linkedin.png" alt="Logo LinkedIn" width={24} height={24} layout="fixed" />
                <p className="ml-2">@{social.linkedin}</p>
            </a>

            <p className="font-md font-bold text-left mb-4">Ou nos envie um email</p>
            <a className="flex mb-2 font-bold" href="mailto:seiva.ambientaljr@gmail.com">
                seiva.ambientaljr@gmail.com
            </a>
        </div>
      </div>
    );
};

export default ContactForm;
