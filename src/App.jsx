import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDatailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./componentes/NavBar/NavBar";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDatailContainer/>}/>

      </Routes>
      
      </BrowserRouter>

      
      
    </div>
  )
}

export default App