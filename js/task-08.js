const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const elements = event.target.elements; 

 
  if (!elements.email.value || !elements.password.value) {
    alert('Please fill in all fields'); 
    return;
  }

  const formData = {}; 

  
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.type !== 'submit') {
      formData[element.name] = element.value;
    }
  }

  console.log(formData); 
  form.reset(); 
});
