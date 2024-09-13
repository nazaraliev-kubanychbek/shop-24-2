import {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import './style.css';
import { useDispatch } from 'react-redux';
import { getCategories } from './redux/reducer';
import Home from './pages/Home/Home';
import Detail from './pages/Details/Detail';
import CategoryPage from './pages/CategoryPage/CategoryPage'
import Cart from './pages/Cart/Cart';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories());
  }, [dispatch])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
