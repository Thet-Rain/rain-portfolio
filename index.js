function SubmitMessage()
{
  var name =  document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  alert('Thank you for contacting me ' + name + '. I will reply to your inquries to your email at ' + email + '. Have a nice day.');
  window.location.assign("index.html");
}
