import { useState } from 'react';
import NoCharacters from './component/NoCharacters';
import CharacterList from './component/CharacterList'
import Sidebar from './component/Sidebar'
import Header from './component/Header';

function App() {
  const [countPages, setCount] = useState(1)
  const [page, setPage] = useState(1)
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [specie, setSpecie] = useState("")
  const [gender, setGender] = useState("")

  return (
  <>
    <div className='h-full w-full bg-gray-400 z-0 absolute flex-col'>
      <Header countPages={countPages} page={page} setPage={setPage} />
      <Sidebar setPage={setPage} setName={setName} setStatus={setStatus} setSpecie={setSpecie} setGender={setGender} />
      {page === null ? <NoCharacters /> :
        <CharacterList setCount={setCount} setPage={setPage} page={page} name={name} status={status} specie={specie} gender={gender} />
      }
    </div>
  </>
  )
}

export default App;
