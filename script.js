var formulario = document.getElementById('cadastro')
var data = document.getElementById('datanasc')
var nome = document.getElementById('nome')
var sobrenome = document.getElementById('sobrenome')
var email = document.getElementById('email')
var senha = document.getElementById('senha')
var confirmarSenha = document.getElementById('confirmar-senha')
var confirmaSenha = document.getElementById('confirma-senha')
var logout = document.getElementById('logout')
var usuarios = []

function validarLogin(){
    let storedEmail = localStorage.getItem('email')
    let storedSenha = localStorage.getItem('senha')

    if(email.value === storedEmail && senha.value === storedSenha){
        alert('login efetuado com sucesso!')
        location.href = 'home.html'
        return true
    } else{
        alert('Login ou senha invalidos!')
        return false
    }

}

function validaCadastro(){
    
    let dataNasc = data.value 
    let anoNasc = Number(dataNasc.split('-',1))
    let date = new Date()
    let anoAtual = date.getFullYear()
    let idade = anoAtual - anoNasc
    if(idade < 18){
        alert('Menor de idade nao pode acessar!')
        return false
    } else{
        localStorage.setItem('email',email.value)
        localStorage.setItem('senha',senha.value)
        alert('Cadastro efetuado com sucesso!')
        location.href = 'login.html'
        
    }
}

logout.addEventListener('click', ()=>{
    alert("Logout efetuado com sucesso!")
    localStorage.clear()
    location.href = 'login.html'
})


confirmarSenha.addEventListener('focusout', ()=>{
    if(senha.value === "" || confirmarSenha.value === ""){
        
    }else if(senha.value === confirmarSenha.value){
        confirmaSenha.innerText = "Senhas conferem"
        confirmarSenha.style.borderColor = 'green'
        confirmaSenha.style.color = 'green'
    } else{
        confirmarSenha.style.borderColor = 'red'
        confirmaSenha.innerText = "Senhas nao coincidem"
        confirmaSenha.style.color = 'red'
    }
})


var cadastro = ()=>{
   
    let nomeCadastrado = nome.value
    let sobrenomeCastrado = sobrenome.value
    let emailCadastrado = email.value
    let senhaCadastrada = senha.value
    let dataNasc = data.value

    // usuarios.push({nome: nomeCadastrado, sobrenome: sobrenomeCastrado, email: emailCadastrado, senha: senhaCadastrada, dataNascimento: dataNasc})

    localStorage.setItem('email',emailCadastrado)
    localStorage.setItem('senha',senhaCadastrada)

    console.log(usuarios)
}



