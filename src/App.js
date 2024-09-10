import {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './redux/reducer';
import Home from './pages/Home/Home';
import Detail from './pages/Details/Detail';
import CategoryPage from './pages/CategoryPage/CategoryPage'

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(s => s.reducer.cart);

  useEffect(()=>{
    dispatch(getCategories())
    console.log(cart);

  }, [dispatch, cart])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path='/product/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
