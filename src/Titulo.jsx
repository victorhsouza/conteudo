import { useState } from "react"

function Titulo({cor}){
    const [texto,setTexto] = useState("Um titulo de estado inicial")
    const [inputText,setInputText] = useState("")
    const soma = 10 + 10
    const urlImg = "https://nerdhits.com.br/wp-content/uploads/2023/07/naruto-uzumaki_qabz.jpg"

    function clicou(){
        setTexto(inputText)
    }

 

    return (
        <div>
            <h1 style={{color: cor}} >{texto}</h1>
            <input type="text" onChange={(e)=>{setInputText(e.target.value)}} value={inputText} name="" id="" />
            <button onClick={clicou} > Mudar </button>
        </div>
    )
    
    
}


export default Titulo