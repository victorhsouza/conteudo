var email = document.getElementById('email').value
var senha = document.getElementById('senha').value


function validaLogin(){
    let storedEmail = localStorage.getItem('email')
    let storedSenha = localStorage.getItem('senha')

    if(email === storedEmail && senha=== storedSenha){
        alert('login efetuado com sucesso!')
        location.href = 'home.html'
        return true
    } else{
        alert('Login ou senha invalidos!')
        return false
    }

}