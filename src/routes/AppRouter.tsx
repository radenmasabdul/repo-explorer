import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Repository from "@/pages/repositories";
import Favorite from "@/pages/favorites";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Repository />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};