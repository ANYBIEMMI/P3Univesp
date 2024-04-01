import React, { useState } from 'react';
import styles from './form.module.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [teste, setTeste] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);
    setNome('');
    setEmail('');
    setMensagem('');
    setTeste('');
  };

  return (
<body>
<Header/>
    <div class="divHeader"><h3>Cadastrar novo aluguel</h3></div>

  
    <section className={styles.form}>  
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          teste:
          <input
            type="teste"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Mensagem:
          <textarea
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
    
    </body>
  );
  
}

export default Formulario;
