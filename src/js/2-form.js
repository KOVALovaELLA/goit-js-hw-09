document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('.feedback-form');


  const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  feedbackForm.elements['email'].value = savedData.email || '';
  feedbackForm.elements['message'].value = savedData.message || '';

  
  feedbackForm.addEventListener('input', function () {
    const formData = {
      email: feedbackForm.elements['email'].value.trim(),
      message: feedbackForm.elements['message'].value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });


  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    
    if (feedbackForm.elements['email'].value.trim() && feedbackForm.elements['message'].value.trim()) {
     
      const formData = {
        email: feedbackForm.elements['email'].value.trim(),
        message: feedbackForm.elements['message'].value.trim()
      };
      console.log(formData);

      
      localStorage.removeItem('feedback-form-state');
      feedbackForm.reset();
    }
  });
});