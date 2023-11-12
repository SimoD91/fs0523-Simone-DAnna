(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        window.location.href = "indexModifica.html";
        event.preventDefault()
      }

      form.classList.add('was-validated')
    }, false);
    let resetButton = form.querySelector("#resetButton");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      form.reset();
      form.classList.remove("was-validated")
    })
    }
  })
})()