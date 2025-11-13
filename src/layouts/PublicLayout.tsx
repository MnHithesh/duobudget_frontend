import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header variant="public" />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
