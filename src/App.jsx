import './App.css'
import Header from './Components/Header'
import Input from './Components/Input'
import Movie from './Components/Movie'
import card1 from './assets/card1.jpg'
import card2 from './assets/card2.jpg'
import card4 from './assets/card4.jpg'
import card5 from './assets/card5.jpg'
import card8 from './assets/card8.jpg'


function App() {

  return (
    <>
     <Header/>
     <br />
     <Input/>
     <div className="card-container">

     <Movie 
     img={card1}
     name={"MineCraft"}
     year={"(2025)"}
     />
    <Movie 
     img={card2}
     name={"Avatar"}
     year={"(2013)"}
     />
     <Movie 
     img={card3}
     name={"Romeo"}
     year={"(2020)"}
     />
     <Movie 
     img={card4}
     name={"Joker"}
     year={"(2016)"}
     />   
     <Movie 
     img={card5}
     name={"Avangards"}
     year={"(2017)"}
     />     
    <Movie 
     img={card7}
     name={"Transformers"}
     year={"(2015)"}
     />
     <Movie 
     img={card8}
     name={"Alladdin"}
     year={"(2023)"}
     />
     </div>
    </>
  )
}

export default App
