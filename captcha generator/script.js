const str = "Q2WER0TYUI1OP8a2sdf3ghj4klZX5CV5BNMqw6ert6yu7iop0ASD8FGHJ9KL3zxc9vb4nm"
const length = 6;

const output = document.querySelector("#captcha")
const userInput = document.querySelector("#userInput")
const massage = document.querySelector("#message")


function generatCaptcha(){
    let captcha = ""
    for (let i = 0; i < length; i++) {
        captcha += str[Math.floor(Math.random() * str.length)]
    }
    output.value = captcha
}


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

function checkCaptch(){
    if(output.value === userInput.value){
        // massage.innerHTML = "Correct !"
            appendAlert('Nice, you Entered the correct Captcha!', 'success')
        generatCaptcha();
        
    }else {
        // massage.innerHTML = " InCorrect ! Try Again"
        appendAlert('Wrong Captcha, Please Enter Valid Captcha..', 'danger')
        generatCaptcha();
    }
}
window.onload = generatCaptcha()

