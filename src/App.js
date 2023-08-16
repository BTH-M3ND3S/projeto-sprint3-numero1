import { useState } from "react";
import ExibeNota from "./components/Exibenota"
import Contador from "./components/contador";
import BoasVindas from "./components/BoasVindas";


function App(props) {

  


  let nota = props.nota;
  let aprovado = false;
  let reprovado = false;
  if(nota > 5){
    aprovado = true;
  } else {
    reprovado= true;
  }

  

  return (
    <>
      { aprovado && 
      <ExibeNota mensagem="aprovado" nota={props.nota}/>
       }
      { reprovado && 
      <ExibeNota mensagem="reprovado" nota={props.nota}/>
      }  
      <Contador/>
      <BoasVindas/>
    </>
  );
}

export default App;
