import RootLayout from "@/layout/RootLayout";
import Main from "@/views/Main";
import SignIn from "@/views/SignIn";
import {Route} from "react-router-dom";
import {createRoutesFromElements} from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="/signin" element={<SignIn />} />
    </Route>
  )
);

export default router;
