import './App.css'
import Card from './components/Card'
import { ALL_CARD_DATA } from './data'
function App() {
  return (
    <>
    {ALL_CARD_DATA.map((foods,index)=>(
      <Card food={foods} key={index}/>
    ))}
   </>
  )
}

export default App
