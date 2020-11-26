$('.carousel').carousel({
  interval: 5000
})

var clique = document.getElementById("nav-contato");
clique.onclick = function() {
  mudarCorContatos()
}

function mudarCorContatos() {
  facebook = document.getElementById("facebook");
  $(facebook).animate({opacity: 0.5},500);
  $(facebook).animate({opacity: 1.0},500);
  $(facebook).animate({opacity: 0.5},500);
  $(facebook).animate({opacity: 1.0},500);
  $(facebook).animate({opacity: 0.5},500);
  $(facebook).animate({opacity: 1.0},500);

  whatsapp = document.getElementById("whatsapp");
  $(whatsapp).animate({opacity: 0.5},500);
  $(whatsapp).animate({opacity: 1.0},500);
  $(whatsapp).animate({opacity: 0.5},500);
  $(whatsapp).animate({opacity: 1.0},500);
  $(whatsapp).animate({opacity: 0.5},500);
  $(whatsapp).animate({opacity: 1.0},500);

  instagram = document.getElementById("instagram");
  $(instagram).animate({opacity: 0.5},500);
  $(instagram).animate({opacity: 1.0},500);
  $(instagram).animate({opacity: 0.5},500);
  $(instagram).animate({opacity: 1.0},500);
  $(instagram).animate({opacity: 0.5},500);
  $(instagram).animate({opacity: 1.0},500);

  envelope = document.getElementById("envelope");
  $(envelope).animate({opacity: 0.5},500);
  $(envelope).animate({opacity: 1.0},500);
  $(envelope).animate({opacity: 0.5},500);
  $(envelope).animate({opacity: 1.0},500);
  $(envelope).animate({opacity: 0.5},500);
  $(envelope).animate({opacity: 1.0},500);
}

