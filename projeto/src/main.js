const popup = document.getElementById("gmailCard");

function gmailPopup(open) {
  if (open) {
    popup.classList.remove("hidden");
    popup.classList.add("block");  // Torna o popup visível
  } else {
    popup.classList.add("hidden");
    popup.classList.remove("block");  // Esconde o popup
  }
}
