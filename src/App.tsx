import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Ancoras from "./ancoras/Ancoras";

import "./App.css";
import { Whats } from "./components/whatsapp/WhatsApp";

function App() {

  return (
    <>
      <Navbar />
        <Whats />
        <Ancoras />
      <Footer />
    </>
  )
}

export default App
