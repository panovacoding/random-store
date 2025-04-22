import MainPage from './pages/MainPage/MainPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Catalog from './pages/Catalog/Catalog';
import Favorites from './pages/Favorites/Favorites';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='catalog/:id' element={<ProductDetail />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
