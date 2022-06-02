$(document).ready(function() {
  $("#carousel").waterwheelCarousel({
  autoPlay: 5000,
  movedToCenter: function ($newCenterItem) {$newCenterItem.next('.carousel-caption').show();},
  movingFromCenter: function ($oldCenterItem) {$oldCenterItem.next('.carousel-caption').hide();},
  edgeFadeEnabled: true
  });
  });