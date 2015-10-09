$(function() {
  mentoringBubbleClick();
  setInterval(function(){recipiesTada()}, 4000);
  generationBGStuff();
  mobileNav();
  smoothScroll();
});

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

function generationBGStuff() {

  $('.generation-img-link').hover(function(){
    $(this).parent().parent().css('background-color', $(this).data('color'));
  }, function(){
    $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));
  });

}


function recipiesTada(){
  var randNum = Math.floor(Math.random() * $('.recipies-thumb').length) +1
  $('.recipies-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}

function mentoringBubbleClick() {
  $('.face').on('click',function() {
    var $this = $(this),
        faceTop = $this.position().top,
        vertMath =  -1 * (faceTop - 230),
        faceLeft = $this.position().left,
        horizMath =  0 - faceLeft;

    if($(window).width() > 640){
      $this.parent().css('top', + vertMath +'px');
    } else {
      if($this.hasClass('back-btn')){
        mentoringNarrowStart();
      } else {
        $this.parent().css('left', + horizMath +'px');
      }
    }
    if(!$this.hasClass('back-btn')){
      $this.addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open');
    }
  });

}


$(window).scroll(function() {
  recipiesScroll();
  startMentoring();
  startRecipies();
});


function recipiesScroll() {

  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position','center -'+ wScroll +'px');
}

function startRecipies(){
  var wScroll = $(window).scrollTop();

  if($('section.recipies').offset().top - $(window).height()/2 < wScroll) {
    $('.recipies-thumb').each(function(i){
      setTimeout(function(){
        $('.recipies-thumb').eq(i).addClass('is-visible');
      }, 200 * i);
    });
  }
}

function startMentoring() {

  var wScroll = $(window).scrollTop();

  if($('section.mentoring').offset().top - $(window).height()/2 < wScroll) {
    if($(window).width() > 640) {
    $('.faces').addClass('launched');
      if(!$('.face').hasClass('has-bubble-open')){
        setTimeout(function(){
          $('.face:nth-child(3)').addClass('has-bubble-open');
        }, 400);
      }
    } else {
      mentoringNarrowStart();
    }
  }

}

function mentoringNarrowStart() {
  $('.faces').css({
    'top': '230px',
    'left': '0px'
  });
  $('.face').first().addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}

function mentoringWideStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  $('.face:nth-child(3)').addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}


$(window).resize(function() {
  if($(window).width() > 640){
    mentoringWideStart();
  } else {
    mentoringNarrowStart();
  }
});

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}