import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Detail from "./views/Detail"
import injectContext from "./store/context";  

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalles/:id" element={<Detail/>}/>
      </Routes>
      
    
    </BrowserRouter>
  );
};

export default injectContext(App);
