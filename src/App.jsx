import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import ListaBuses from './assets/Components/ListaBuses/ListaBuses'
import DetalleBuses from './assets/Components/DetalleBuses/DetalleBuses'

function App() {
  
    
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ListaBuses/>}/>
          <Route path='/:id' element={<DetalleBuses/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}


export default App
