import { useState } from 'react'
import PlayerTable from './components/PlayerTable.jsx';
import NavBarHome from './components/NavBarHome.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarHome ShowLightButtons={true}/>
      <PlayerTable ShowLightButtons={false}/>
    </>
  )
}

export default App
