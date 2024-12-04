import "./App.css";
import Layout from "./pages/Layout";
import Authenticate from "./pages/Authenticate";
import BurgerBuilder from "./pages/BurgerBuilder";
import Orders from "./pages/Orders";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Nav />
      <BurgerView /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BurgerBuilder />} />
            <Route path="auth" element={<Authenticate />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;