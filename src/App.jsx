import './App.css'
import Header from './Components/Header'
import Input from './Components/Input'
import Movie from './Components/Movie'
import card1 from './assets/card1'

function App() {

  return (
    <>
     <Header/>
     <br />
     <Input/>
     <Movie img={card1}/>
    </>
  )
}

export default App
