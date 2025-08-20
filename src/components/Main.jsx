import "../CSS/main.css";
import imgFundo from "../assets/imgFundo.svg";
import { Button } from "react-bootstrap";
import Cadeado from "../assets/Cadeado.png"
import imgquadrado from "../assets/Quadrado.png"
import quadrado2 from "../assets/quadrado2.png"
function Main() {
  return (
    <div>
      <main>
        <div className="Fundo-f">
          <div  className="Cabecalho">
            <div className="cabecalho-filho">
            <h1>Comunique. Colabore. Crie.</h1>
            <p>WeDo oferece um jeito eficaz de gerenciar seus projetos</p>
            <Button variant="dark">Começar</Button>
            </div>
            <div className="cabecalho2">
              <div id="cad1">
                <img src={Cadeado} alt="Cadeado" />

              </div>
                            <p>
              Velocidade e segurança
             </p>

              <div id="cad2">
                <img src={imgquadrado} alt="Cadeado" />
             
              </div>
               <p>
              Velocidade e segurança
             </p>

              <div id="cad3">
                <img src={quadrado2} alt="Cadeado" />

              </div>
                            <p>
              Velocidade e segurança
             </p>

            </div>
          </div>
          <div>
            <img id="img-fundo" src={imgFundo} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
