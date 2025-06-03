import './App.css'
import MyButton from './components/my-button'
import ContadorClase from './components/contador-clase.jsx';
import ComponenteA from './components/ComponenteA.jsx';
import ComponenteB from './components/ComponenteB.jsx';
import { useState, useCallback } from 'react';
// import ComponenteC from './components/ComponenteC.jsx';

function App() {

  const miEmoji = "👋"
  const miBoton = "Buscar destino"

  const [mensaje, setMensaje] = useState("Hola soy un mensaje")

  const manejarClick = () => {
        setMensaje("Listo para viajar")
        alert("click en componente padre");
    }

  const callback = useCallback(
    (datos) => {
    setMensaje(datos)
  }, [mensaje]
)

  return (
    <>
      {/* <MyButton texto="Mi boton"/> */}
      {/* <ContadorClase/> */}
      <ComponenteA 
        emoji={ miEmoji }
        titulo={ mensaje }
      />
      <ComponenteB 
        onClick={ manejarClick }
        textoBtn={ miBoton }
      />

      <ComponenteB 
        onClick={ callback }
        textoBtn="Callback"
      />

    </>
  )
}

export default App
