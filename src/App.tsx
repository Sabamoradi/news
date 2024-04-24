import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./domains/Home";
import MainLayout from "./Layout/Main";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Routes goes here . . . */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
