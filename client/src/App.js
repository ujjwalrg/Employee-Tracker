// import "./styles.css"
import { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer"; 
import BodyContent from "./components/bodyContent";
function App() {

  return (
    <div className="App">
      <Header />
      <BodyContent />
      <Footer />
    </div>
  );
}

export default App;
