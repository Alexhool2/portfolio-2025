import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import { Toaster } from "./components/ui/toaster.jsx"
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
