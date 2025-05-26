import { Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

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
      </Routes>
    </div>
  );
}


export default App
