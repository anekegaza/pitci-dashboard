import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/Components/Header";
import Sidebar from "./assets/Components/Sidebar";
import Home from "./pages/Home";
import Pitches from "./pages/pitches";
import Calendar from "./pages/calendar";
import Personal from "./pages/personal";
import NoPage from "./pages/404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex items-start">
          <div className="bg-white shadow-xl h-screen p-4 sticky top-2 z-50">
            <Sidebar />
          </div>
          <div className=" main-area  flex gap-2 flex-col w-full relative">
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/pitches" element={<Pitches />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
