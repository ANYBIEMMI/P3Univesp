import React from 'react';
import { Link } from 'react-router-dom';

function Header(){


    return(
        
        <header className="App-header">
        <div className="header-grid">
          <div className="header-logo">
            <Link to="/">
            <img src="https://www.svgrepo.com/show/181800/library-book.svg" alt="logo" />
            </Link>
           
          </div>
          <h2>LibraTech</h2>
        </div>
      </header>
    )
}

export default Header