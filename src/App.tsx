import { Container } from "./homeStyles"

import Header from './components/header/Header'
import Index from './components/index/index'
import { Footer } from './components/footer/Footer'
import { Transparencia } from "./components/transparencia/transparencia"
import { About } from "./components/about/About"
import { Contact } from "./components/contact/Contact"
import { Apoie } from "./components/apoie/apoie"

import { Route, Routes, Link } from "react-router-dom";

function App() {

  return (
    <Container>

      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/apoie" element={<Apoie />} />
      </Routes>

      <Footer />

    </Container>
  )
}

export default App
