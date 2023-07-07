import Titulo from "./Titulo"

function App(){
  return (
    <div>
      <Titulo cor="red" nome="Vitec" paragrafo={false}/>
      <Titulo cor="blue"/>
      <Titulo cor="orangered"/>
    </div>
  ) 
}

export default App