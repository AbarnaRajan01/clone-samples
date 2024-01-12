import './App.css'
import GenreList from './components/GenreList'
import Header from './components/Header'
import Slider from './components/Slider'
import Production from './components/production'

function App() {
  

  return (
  
      <div className=''>
        <Header/>
        <Slider/>
        <Production/>
        <GenreList/>
      </div>
      
  )
}

export default App
