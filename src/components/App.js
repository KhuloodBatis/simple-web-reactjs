import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Text from "./Text";
import Socialmida from "./Socialmida";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className=" flex flex-row justify-between p-20 bg-red-300">
        <Text />
        <Socialmida />
      </div>

      <Footer />
    </div>
  );
}

export default App;
