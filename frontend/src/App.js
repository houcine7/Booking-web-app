import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import EmailContainer from "./Components/Email/EmailContainer";
import Footer from "./Components/Footer/Footer";
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
              <NavBar isListHotels={false} />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/Hotels"
          element={
            <>
              <NavBar isListHotels={true} />
              <ListHotel />
            </>
          }
        />
        <Route
          path="/Hotels/:id"
          element={
            <>
              <NavBar isListHotels={true} />
              <Hotel />
              <EmailContainer />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
