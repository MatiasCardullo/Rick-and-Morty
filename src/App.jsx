import { useState } from 'react';
import CharacterList from './component/CharacterList'
import Sidebar from './component/Sidebar'
import Footer from './component/Footer';

function App() {
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")

  return (
    <div className='h-full bg-gray-400 z-0 relative flex-col'>
    <Sidebar setName={setName} setStatus={setStatus} setGender={setGender} />
    <CharacterList name={name} gender={gender} status={status} />
    <Footer/>
    </div>
  )
}

export default App;
