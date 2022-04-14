const message =
  "Thank you for your message. I hope to see you soon and that you liked my work ";

document.getElementById("rep").addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
