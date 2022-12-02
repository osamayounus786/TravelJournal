import './App.css'
import Header from './components/header'
import Main from './components/main'
import {data} from './components/data'
function App(){
  const fetchData = data.map((item)=>{
      return(
     <Main 
      key={item.id}
      {...item}
      />)
  })
  return(
    <>
    <Header />
    {fetchData}
    
    </>
    )
}

export default App;