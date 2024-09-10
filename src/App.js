import {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryComponent from './components/CategoryComponent/CategoryComponent';
import Header from './components/Header/Header';
import './style.css';
import { useDispatch } from 'react-redux';
import { getCategories } from './redux/reducer';
import Home from './pages/Home/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/category/:category" element={<CategoryComponent category="electronics" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
