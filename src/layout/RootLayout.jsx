import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function RootLayout() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
