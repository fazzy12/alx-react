import React from 'react'
import './Footer.css'

function Footer(){
    render(
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    );
}

export default Footer;