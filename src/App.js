import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from './layout/root-layout/RootLayout';
import Shop from './pages/Shop';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import Product from './pages/Product';

import menBanner from "./Assests/imgs/banner_mens.png"
import womenBanner from "./Assests/imgs/banner_kids.png"
import kidsBanner from "./Assests/imgs/banner_kids.png"
import SignUp from './pages/SignUp';
import Login from './pages/Login';

library.add(fas , faFacebook , faInstagram , faWhatsapp)

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={menBanner} category="men" />} />
        <Route path="/women" element={<ShopCategory banner={womenBanner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kidsBanner} category="kids" />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
