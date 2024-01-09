import CharacterList from './component/CharacterList'
import Sidebar from './component/Sidebar'

function App() {
  return (
    <div className='flex'>
    <Sidebar/>
    <CharacterList/>
    </div>
  )
}

export default App;
