import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
