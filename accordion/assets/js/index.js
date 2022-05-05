let accordion = document.querySelectorAll('.contentTX')
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
      this.classList.toggle("active");
    });
}
