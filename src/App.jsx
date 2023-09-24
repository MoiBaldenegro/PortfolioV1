import './App.css'
import { Routes, Route} from "react-router-dom"
import Projects from './pages/projects/projects'
import Landing from './pages/landing/landing'
function App() {

  return (
    <main className="App">
       <Routes>
          <Route path="/" element={<Landing/> } />
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </main>
  )
}

export default App
