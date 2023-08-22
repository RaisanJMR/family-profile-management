
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddMember from './pages/AddMember'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddMember />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
