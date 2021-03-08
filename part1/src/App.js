
import './App.css';
import Mensaje from "./Mensaje"

const Description = () =>{
  return <p>
    Esta es una App en Negrita
  </p>
}

function App() {
  return (
    <div className="App">
      <h1>Titulo de la App</h1>
      <Mensaje color='red' message='ahora seee!' />
      <Description />
    </div>
  );
}

export default App;
