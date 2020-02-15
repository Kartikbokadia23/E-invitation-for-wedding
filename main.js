

$(document).ready(function () {

    $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open'); 
    });
  }); 


  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 100;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

};

var x= window.matchMedia("(max-width:450px)")
scrollFunction(x)
x.addListener(scrollFunction)



function scrollFunction(x){
  if(x.matches){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll < 370){
          $('nav').removeClass('black');
          $('nav').css('opacity','0');
          $('.logo').css('opacity','0');
          $('.scrolltop').css('opacity','0');
          
      } else{
          $('nav').addClass('black');
          $('nav').css('opacity','1');
          $('.logo').css('opacity','1');
          $('.scrolltop').css('opacity','1');
      }
      });
  }
  else
  {
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll < 600){
          $('nav').removeClass('black');
          $('nav').css('opacity','0');
          $('.logo').css('opacity','0');
          $('.scrolltop').css('opacity','0');
          
      } else{
          $('nav').addClass('black');
          $('nav').css('opacity','1');
          $('.logo').css('opacity','1');
          $('.scrolltop').css('opacity','1');
      }
      });
  }


}


function moveToSelected(element) {
  if (element == "next") {
      var selected = $(".selected").next();
  }
  else if (element == "prev") {
      var selected = $(".selected").prev();
  }
  else {
      var selected = element;
  }
  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();
  $(selected).removeClass().addClass("selected");
  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");
  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");
  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');
}

$('.img-carousel div').click(function () {
  moveToSelected($(this));
});
$('#prev').click(function () {
  moveToSelected('prev');
});
$('#next').click(function () {
  moveToSelected('next');
});



jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});








  
