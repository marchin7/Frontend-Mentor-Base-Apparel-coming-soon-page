const submitMessage = document.getElementById('spanError');
const input = document.getElementById('input');
const contentBtn = document.getElementById('contentBtn');
const form = document.getElementById('form');
const errorIcon = document.getElementById('errorIcon');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e)=>{
  e.preventDefault();
})

  function clearValue(value){
      if(value === ''){
      submitMessage.innerText = '' 
      errorIcon.style.display = 'none'}
      console.log(value)
}


contentBtn.addEventListener('click', ()=>{

  if(input.value === ''){submitMessage.innerText = 'This field is required' 
  errorIcon.style.display = 'block' 
  submitMessage.style.color = 'red'
  input.focus()
}

  else if(!input.value.match(pattern)){submitMessage.innerText = 'Please provide valid email'
  submitMessage.style.color = 'red'
  errorIcon.style.display = 'block'
  input.focus()
  
}


else{submitMessage.innerText = 'Thank you for submiting your email'
   submitMessage.style.color = 'green'
   errorIcon.style.display = 'none'
   input.value = ''
   setTimeout(()=>{submitMessage.innerText= ''},2500)
   
}

/*
  if(input.value.match(pattern)){submitMessage.innerText = 'Thank you for registering your email'
     input.value = ''
     submitMessage.style.color = 'green'
     setTimeout(()=>{submitMessage.innerText= ''},3000)
  }
  else if(input.value === ''){submitMessage.innerText = 'This field is required' 
     errorIcon.style.display = 'block' 
     submitMessage.style.color = 'red'
     input.focus()
  }

  else{submitMessage.innerText = 'Please provide valid email'
      errorIcon.style.display = 'block' 
      submitMessage.style.color = 'red'
      input.focus()
  }
 */
  
})

