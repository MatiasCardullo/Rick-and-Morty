import CharacterList from './component/CharacterList'
import Sidebar from './component/Sidebar'
import Footer from './component/Footer';

function App() {
  return (
    <div className='h-full bg-gray-400 z-0 relative flex-col'>
    <Sidebar/>
    <CharacterList/>
    <Footer/>
    </div>
  )
}

export default App;
