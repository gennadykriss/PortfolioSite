import { Home } from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { About } from "./pages/About"
import Navbar from "./components/Navbar";

function App() {
  return (
    <> 
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
