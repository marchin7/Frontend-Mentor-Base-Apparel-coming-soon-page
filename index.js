
const form = document.getElementById('form');
const input = document.getElementById('input');
const errorIcon = document.getElementById('errorIcon');
const submitBtn = document.getElementById('submitBtn');
const submitMessage = document.getElementById('submitMessage');
const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
})

function clearInputValue(value){
    if(value === '' || value.match(pattern)){
        submitMessage.style.opacity ='0'
        errorIcon.style.opacity = '0'
    } 
};

submitBtn.addEventListener('click', ()=>{
    if(input.value === '') {
        submitMessage.innerText = 'This field is required'
        submitMessage.style.opacity = '1'
        errorIcon.style.opacity = '1'
        submitMessage.style.color = 'red'
        input.focus()
    }
    else if(!input.value.match(pattern)){
        submitMessage.innerText ='Please provide a valid email'
        submitMessage.style.opacity = '1'
        submitMessage.style.color ='red'
        errorIcon.style.opacity = '1'
        input.focus()
    }
    else{
        submitMessage.innerText = 'Thank you for submiting your email'
        submitMessage.style.opacity = '1'
        submitMessage.style.color ='green'
        errorIcon.style.opacity = '0'
        input.value = ''
        setTimeout(()=>{submitMessage.style.opacity = '0'},2000)
    }
    
})
