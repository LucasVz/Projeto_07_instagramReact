import ReactDOM from 'react-dom';

import Navbar from "./componets/Navbar";
import Conteudo from './componets/Conteudo';

function App() {
  return (
    <div class = "body">
      <Navbar />
      <Conteudo/>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));