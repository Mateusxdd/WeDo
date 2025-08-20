import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "./components/Formulario";
import Tarefas from './components/Tarefas';
import { ssrImportMetaKey } from 'vite/module-runner';
import Imagem from './components/Imagem';
import NavBar from './components/NavBar';
import Timer from './components/Timer';
import Render from './components/Render';
import Calculadora from './components/Calculadora';
import ExemploStyle from './components/ExemploStyle';
import ExemploEstiloExterno from './components/ExemploEstiloExterno';
import Main from './components/Main';

function App() {


  return (
    <div>
      {/* <Calculadora /> */}
      {/* <Timer /> */}
      {/* <Render /> */}
      {/* <NavBar /> */}
      {/* <Imagem/> */}
      {/* <Tarefas /> */}
      {/* <Formulario /> */}
      <NavBar/>
      <Main/>
    </div>
  )
}

export default App
