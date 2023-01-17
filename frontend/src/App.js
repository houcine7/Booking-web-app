import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home/Home";
import Hotel from "./Components/Hotels/Hotel";
import ListHotel from "./Components/Hotels/ListHotel";
import NavBar from "./Components/Nav/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route path="/Hotels" element={<ListHotel />} />
        <Route path="/Hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
