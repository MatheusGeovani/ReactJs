import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Time from "./Componentes/Time";


function App() {
  

  return (
    <div className="App">
      <Banner/>
      <Formulario/>
      <Time nome="Programação"/>
      <Time nome="Qualidade"/>
    </div>
  );
}

export default App;
