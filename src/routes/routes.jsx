import RootLayout from "@/layout/RootLayout";
import Cart from "@/views/Cart";
import Customer from "@/views/Customer";
import Drink from "@/views/Drink";
import Event from "@/views/Event";
import Faq from "@/views/Faq";
import FindStore from "@/views/FindStore";
import Food from "@/views/Food";
import Main from "@/views/Main";
import Notice from "@/views/Notice";
import Product from "@/views/Product";
import SignUp from "@/views/SignUp";
import {Route} from "react-router-dom";
import {createRoutesFromElements} from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/findStore" element={<FindStore />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/event" element={<Event />} />
      <Route path="/drink" element={<Drink />} />
      <Route path="/food" element={<Food />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

export default router;
