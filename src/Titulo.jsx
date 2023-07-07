function Titulo({nome,paragrafo,cor}){
    const soma = 10 + 10
    const urlImg = "https://nerdhits.com.br/wp-content/uploads/2023/07/naruto-uzumaki_qabz.jpg"
    return (
        <div>
            <h1 style={{color: cor}} >Oi, eu sou {nome ? nome : "Fulano"}</h1>
            {
                paragrafo ? 
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt impedit quasi nam delectus doloremque vero, illum, quod maxime temporibus adipisci omnis. Recusandae fugit maiores pariatur sed, quo repudiandae molestiae!</p>
                : 
                <p>naada</p>
            }
            
        </div>
    )
    
    
}


export default Titulo