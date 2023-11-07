import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet/Wallet";
import AddedPage from "./pages/AddedPage";
import Helppage from "./Helppage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="register" element={<Register />} />
          <Route path="addedPage" element={<AddedPage />} />
        </Route>
        <Route path="/register" element={<Register />} />
      <Route path="/*" element={<>not found</>} />
      <Route path="/support" element={<Helppage/>} />

      </Routes>
    </Router>
  );
}

export default App;
