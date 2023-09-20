import {lazy} from "react";
const RootLayout = lazy(() => import("@/layout/RootLayout"));
const Cart = lazy(() => import("@/views/Cart"));
const Customer = lazy(() => import("@/views/Customer/Customer"));
const Drink = lazy(() => import("@/views/Drink"));
const Event = lazy(() => import("@/views/Event"));
const EventDetail = lazy(() => import("@/views/EventDetail"));
const Faq = lazy(() => import("@/views/Faq"));
const FindStore = lazy(() => import("@/views/FindStore"));
const Food = lazy(() => import("@/views/Food"));
const Main = lazy(() => import("@/views/Main/Main"));
const Notice = lazy(() => import("@/views/Notice"));
const NoticeCreate = lazy(() => import("@/views/NoticeCreate"));
const NoticeDetail = lazy(() => import("@/views/NoticeDetail"));
const NoticeUpdate = lazy(() => import("@/views/NoticeUpdate"));
const Product = lazy(() => import("@/views/Product"));
const SignUp = lazy(() => import("@/views/SignUp"));
const FaqDetail = lazy(() => import("@/views/FaqDetail"));
const FaqCreate = lazy(() => import("@/views/FaqCreate"));
const FaqUpdate = lazy(() => import("@/views/FaqUpdate"));
const CustomerCreate = lazy(() => import("@/views/Customer/CustomerCreate"));

import {Route} from "react-router-dom";
import {createRoutesFromElements} from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";

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
      <Route path="/bbs/event/detail/:eventId" element={<EventDetail />} />

      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

export default router;
