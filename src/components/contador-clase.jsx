import React, { useState } from "react";


const ContadorClase = () => {

    const [conteo, setConteo] = useState(0);

    const incrementar = () => {
        setConteo((prevConteo) => prevConteo + 1)
    };

    const decrementar = () => {
        setConteo((prevConteo) => prevConteo - 1)
    };

    

    return (
        <div>
            <h1>Contador de clase</h1>
            <h2>Conteo: {conteo}</h2>
            <button onClick={decrementar}>Restar Click</button>
            <button onClick={incrementar}>Sumar Click</button>
        </div>
    );
}


export default ContadorClase;