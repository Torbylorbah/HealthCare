
// CONTACT PAGE DATA STORAGE
let patientContainer = []
let fullName = document.querySelector('#fullName')
let email = document.querySelector('#email')
let message = document.querySelector('#message')
let myButton = document.querySelector('.contact-form-button')


myButton.addEventListener('click', (e) => {
  e.preventDefault()
  let patientDetails = {
    fullName: fullName.value,
    email: email.value,
    message: message.value
  }

  patientContainer.push(patientDetails)
  sessionStorage.setItem('details', JSON.stringify(patientContainer));

  const inputs = document.querySelectorAll('#fullName, #email, #message');
  inputs.forEach(input => {
    input.value = '';
  });
})

