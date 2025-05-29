import { Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/NavBar";
import Homepage from "./components/pages/Homepage";

const GlobalStyle = createGlobalStyle`
  body {
    font-Family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
