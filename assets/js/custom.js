$(document).ready(function () {
  var carousel = $("#carousel").waterwheelCarousel({
    flankingItems: 3,
    movingToCenter: function ($item) {
      $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
    },
    movedToCenter: function ($item) {
      $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
    },
    movingFromCenter: function ($item) {
      $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
    },
    movedFromCenter: function ($item) {
      $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
    },
    clickedCenter: function ($item) {
      $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
    }
  });

  $('#prev').bind('click', function () {
    carousel.prev();
    return false
  });

  $('#next').bind('click', function () {
    carousel.next();
    return false;
  });

  $('#reload').bind('click', function () {
    newOptions = eval("(" + $('#newoptions').val() + ")");
    carousel.reload(newOptions);
    return false;
  });

});

const change = (event) => {
  const greenlink = document.getElementById("greenlink1");
  greenlink.text = greenlink.text === 'Learn More' ? 'Close' : 'Learn More';
  event.preventDefault();
}
const change2 = (event) => {
    const greenlink2 = document.getElementById("greenlink2");
  greenlink2.text = greenlink2.text === 'Learn More' ? 'Close' : 'Learn More';
  event.preventDefault();
}
const change3 = (event) => {
    const greenlink3 = document.getElementById("greenlink3");
  greenlink3.text = greenlink3.text === 'Learn More' ? 'Close' : 'Learn More';
  event.preventDefault();
}
const change4 = (event) => {
    const greenlink4 = document.getElementById("greenlink4");
  greenlink4.text = greenlink4.text === 'Learn More' ? 'Close' : 'Learn More';
  event.preventDefault();
}
const change5 = (event) => {
    const greenlink5 = document.getElementById("greenlink5");
  greenlink5.text = greenlink5.text === 'Learn More' ? 'Close' : 'Learn More';
  event.preventDefault();
}
const change6 = (event) => {
    const greenlink6 = document.getElementById("greenlink6");
  greenlink6.text = greenlink6.text === 'Learn More' ? 'Close' : 'Learn More';
  event.preventDefault();
}

$(document).ready(function(){
  
  $(".carousel").carousel({
    interval: false,
    pause: true
  });
  
  $( ".carousel .carousel-inner" ).swipe( {
    swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
      this.parent( ).carousel( 'next' );
    },
    swipeRight: function ( ) {
      this.parent( ).carousel( 'prev' );
    },
    threshold: 0,
    tap: function(event, target) {
      // get the location: in my case the target is my link
      window.location = $(this).find('.carousel-item.active a').attr('href');
    },
    //เอา  a ออกถ้าต้องการให้ slide ที่เป็น tag a สามารถคลิกได้
    excludedElements:"label, button, input, select, textarea, .noSwipe"
  } );
  
  $('.carousel .carousel-inner').on('dragstart', 'a', function () {
    return false;
  });  
  
});


//Owl Carousel//
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  nav: true,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})