import { useState } from 'react'
import RoutesApp from './routes';
import './css/App.css'
import './css/Home.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    
    

    <RoutesApp/>
    </div>
    )
}

export default App
