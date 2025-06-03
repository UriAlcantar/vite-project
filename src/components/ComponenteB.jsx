import React from "react";


const ComponenteB = ({textoBtn, onClick}) => {

    const miValor="Datos del componente hijo"
    return (
        <button onClick={()=>{onClick(miValor)}}> {textoBtn} </button>
    )

}

export default ComponenteB;