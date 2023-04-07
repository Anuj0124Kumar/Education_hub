
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Booksearch from './pages/Booksearch';

function App() {
  return (
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/book_search" element={<Booksearch/>} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;
