import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
function App() {
  return (
    <BrowserRouter basename="/portfolio-2025">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
