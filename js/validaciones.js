window.addEventListener('load', ()=> {
    const form = document.getElementById('contactForm')
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const message = document.getElementById('message')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        const nameValor = name.value.trim()
        const emailValor = email.value.trim()
        const phoneValor = phone.value.trim()
        const messageValor = message.value.trim()

        // Valida campo Name 
        if(!nameValor){
            console.log('Campo vacio')
            validaFalla(name, '*Campo vacio')
        }else{
            validaOk(name)
        }

        // Valida campo Email 
        if(!emailValor){
            console.log('Campo vacio')
            validaFalla(email, '*Campo vacio')
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, '*El e-mail no es valido')
        }else {
            validaOk(email)
        }

        // Valida campo Phone
        if(!phoneValor){
            console.log('Campo vacio')
            validaFalla(phone, '*Campo vacio')
        }else if(!validaPhone(phoneValor)) {
            validaFalla(phone, '*El numero no es valido')
        }else {
            validaOk(phone)
        }

        // Valida campo Message
        if(!messageValor){
            console.log('Campo vacio')
            validaFalla(message, '*Campo vacio')
        }else if(!validaMessage(messageValor)) {
            validaFalla(message, '*El numero de caracteres no es valido')
        }else {
            validaOk(message)
        }

    }
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
        formControl.className = 'input-container falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement

        formControl.className = 'input-container ok'
      
    }
    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    const validaPhone = (phone) => {
        return /^[0-9]{9,}$/.test(phone);
    }
    const validaMessage = (message) => {
        return (message.length >= 10 && message.length <= 500);
    }

})
