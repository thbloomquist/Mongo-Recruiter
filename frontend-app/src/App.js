import { BrowserRouter, Routes, Route } from 'react-router-dom'
//BrowserRouter - wraps uses of router 
//(need to use <BrowserRouter> tag) everytime using a Route 
//Routes - wraps routes
//Route - route component

//pages & components
import Home from './pages/home'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="Pages">
        <Routes>
          <Route
           path="/"
           element={<Home/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
