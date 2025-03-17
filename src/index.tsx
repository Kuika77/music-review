import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Descobrir from './paginas/descobrir';
import lerUrl from './util/lerUrl';
import { MostrarPagina } from './util/mostrarPagina';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/*console.log("URL: " + window.location.pathname);
const pag = window.location.pathname;*/
root.render(
  <React.StrictMode>
    <App />
    <header>
      <h1>Music Review</h1>
    </header>
    <main>
      {MostrarPagina()}
      {/*lerUrl() === '/?p=1' ? <App /> : <Descobrir />*/}
    </main>
    <footer>
      <p>Copyright &copy; 2025</p>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
