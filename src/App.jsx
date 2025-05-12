import { useState } from 'react'

function App() {
  const[numero, setNumero] = useState(100);
  const[mostrar, setMostrar] = useState(true);

  return  (
    <div>
      <h1>UseState</h1>

      <p>Número: {numero}</p>

      <button onClick={() => setNumero(numero + 100)}>Aumentar</button>
      <button onClick={() => setNumero(numero - 100)}>Disminuir</button>

     {mostrar && <p>Este paragrafo aparece quando o estado é verdadeiro!</p>}
     <button onClick={() => setMostrar(!mostrar)}>
      {mostrar ? 'Esconder' : 'Mostrar'}
     </button>
    </div>
  );
}

export default App;