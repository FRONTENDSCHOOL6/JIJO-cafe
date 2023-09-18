import RootLayout from "@/layout/RootLayout"
import Cart from "@/views/Cart"
import Customer from "@/views/Customer/Customer"
import CustomerCreate from "@/views/Customer/CustomerCreate"
import Drink from "@/views/Drink"
import Event from "@/views/Event"
import Faq from "@/views/Faq"
import FaqCreate from "@/views/FaqCreate"
import FaqDetail from "@/views/FaqDetail"
import FaqUpdate from "@/views/FaqUpdate"
import FindStore from "@/views/FindStore"
import Food from "@/views/Food"
import Main from "@/views/Main/Main"
import Notice from "@/views/Notice"
import NoticeCreate from "@/views/NoticeCreate"
import NoticeDetail from "@/views/NoticeDetail"
import NoticeUpdate from "@/views/NoticeUpdate"
import Product from "@/views/Product"
import SignUp from "@/views/SignUp"
import { Route } from "react-router-dom"
import { createRoutesFromElements } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="/signUp" element={<SignUp />} />

      <Route path="/findStore" element={<FindStore />} />

      <Route path="/menu/drink" element={<Drink />} />
      <Route path="/menu/food" element={<Food />} />
      <Route path="/menu/product" element={<Product />} />

      <Route path="/bbs/notice" element={<Notice />} />
      <Route path="/bbs/notice/create" element={<NoticeCreate />} />
      <Route path="/bbs/notice/update/:noticeId" element={<NoticeUpdate />} />
      <Route path="/bbs/notice/detail/:noticeId" element={<NoticeDetail />} />
      <Route path="/bbs/faq" element={<Faq />} />
      <Route path="/bbs/faq/create" element={<FaqCreate />} />
      <Route path="/bbs/faq/detail/:FaqId" element={<FaqDetail />} />
      <Route path="/bbs/faq/update/:FaqId" element={<FaqUpdate />} />
      <Route path="/bbs/customer" element={<Customer />} />
      <Route path="/bbs/customer/create" element={<CustomerCreate />} />
      <Route path="/bbs/event" element={<Event />} />

      <Route path="/cart" element={<Cart />} />
    </Route>
  )
)

export default router
