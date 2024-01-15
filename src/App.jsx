import './App.css'
import Accordian from './components/Accordian/Accordian'
import StarRating from './components/Star Rating/StarRating'
function App() {

  return (
    <>
        {/* Accorian Component */}
        <Accordian></Accordian>

        {/* Star rating */}
        <StarRating stars={10}/>
    </>
  )
}

export default App
