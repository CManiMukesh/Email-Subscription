  const scriptURL = 'https://script.google.com/macros/s/AKfycby2uWwiOjXBQYyVd_Q9KzsU97YKGW51XF3vY0G8gouaWmWrf3Mr4tQBNsb2Gs_C_NRdng/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You for Subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })
