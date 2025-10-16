
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";


export default function App() {
  return (
   <div className="min-h-screen bg-gray-50">
      <Header/>
      <main className="max-w-7xl mx-auto px-4 py-10">
        <Home />
      </main>
      <Footer/>
    </div>
  );
}
