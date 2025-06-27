import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import VideoLoader from './components/VideoLoader/VideoLoader'
import WindowComponent from './practice/Window Component/WindowComponent'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/window' element={<WindowComponent/>}></Route>
      <Route path='/' element={<VideoLoader/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
