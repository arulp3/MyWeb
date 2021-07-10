const btn = document.getElementById('button');

function getTime(){
  var d = new Date();
  var n = d.toLocaleTimeString();
  document.querySelector('.time').innerHTML = n;
}

setInterval(getTime, 1000)




document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_q5gl8vc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


anime({
  targets: 'h1',
  translateX: 1000,
 
});