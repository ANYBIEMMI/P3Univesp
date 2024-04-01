import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Card from './Components/Cards';
import Header from './Components/Header/Header.jsx';

function App() {
  return (
    <div className="App">
       <Header/>
     
      <div className="ctnCards">

        <Link to="/formulario">
        <Card img="https://cdn4.iconfinder.com/data/icons/book-26/64/Key-Book-512.png" titulo="Alugar" descrição="Clique aqui para registrar o aluguel de um livro" />
        </Link>
 
       
         
        <Card img="https://www.svgrepo.com/show/117036/search-book.svg" titulo="Consultar" descrição="Clique aqui para pesquisar sobre um livro" />
        <Card img="https://cdn0.iconfinder.com/data/icons/reading/154/add-books-read-literature-512.png" titulo="Adicionar livro" descrição="Clique aqui para registrar um novo livro" />
      </div>
    </div>
  );
}

export default App;
