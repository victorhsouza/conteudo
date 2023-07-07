import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";

function App(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
            <Route path="/contato" element={<Contato/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    )
}

export default App