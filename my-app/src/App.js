import './App.css';
import Header from './Components/Navigation/Navigation';
import Conteiner from './Components/Conteiner/Conteiner';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <>
    <Conteiner>
      <Header/>
   </Conteiner>
   <Hero/>
   </>
  
  );
}

export default App;
