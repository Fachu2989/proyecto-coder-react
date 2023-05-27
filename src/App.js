
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/'element={<ItemListContainer greeting={'bienvenido'}/>}/>
            <Route path='/categoria/:categoryId' element={<ItemListContainer greeting={'cambio de pagina'}/>}/>
            <Route path='/Item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h1>404 no funciona</h1>}/>  
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
