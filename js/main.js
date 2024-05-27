;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white" aria-label="toggle navigation"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	var tabs = function() {

		// Auto adjust height
		$('.fh5co-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.fh5co-tab-content-wrap'),
					tabHeight = $('.fh5co-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.fh5co-tab-content-wrap'),
						tabHeight = $('.fh5co-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);
			
		};

		autoHeight();


		// Click tab menu
		$('.fh5co-tab-nav a').on('click', function(event){
			
			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.fh5co-tab-nav li').removeClass('active');
			
			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.fh5co-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		}); 
	};


	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		parallax();
		testimonialCarousel();
		tabs();
		// formFocus();
	});


	//Process wheel
	document.addEventListener('DOMContentLoaded', function() {
		// Get all divs with the class "changeBgDiv"
		var processWheel = document.querySelector('.process-wheel');
		// var wheelText = processWheel.querySelector('.wheel-text');

		var header = document.querySelector('.step-header');
		var body = document.querySelector('.step-body');

		// var header = document.querySelector('.process-wheel');

		var targets = document.querySelectorAll('.target-div');
		var progress = document.querySelector('.wheel-loader-container').firstElementChild;
		progress.classList.add(".wheel-loader");
		
		var currentIndex = 0;
		var timer;
	
		// targets.forEach(function(div) {
		// 	div.addEventListener('click', function() {
		function changeTarget(index) {	
				// Get the ID of the clicked div
				// var id = this.getAttribute('id');
				
				header.style.opacity = 0;
				body.style.opacity = 0;

				var target = targets[index];
				var id = target.getAttribute('id');
				
				if (id === 'audit-target') {
					processWheel.style.backgroundImage = "url('../images/Audit.svg')";
				} 
				else if (id === 'report-target') {
					processWheel.style.backgroundImage = "url('../images/Report.svg')";
				} 
				else if (id === 'train-target') {
					processWheel.style.backgroundImage = "url('../images/Train.svg')";
				} 
				else if (id === 'progress-target') {
					processWheel.style.backgroundImage = "url('../images/Progress.svg')";
				}


				setTimeout(function() {
					if (id === 'audit-target') {
						// processWheel.style.backgroundImage = "url('../images/Audit.svg')";
						//wheelText.innerHTML = "Audit";

						header.innerHTML = "<span class=\"orange\">Audit</span>";
						body.innerHTML = "This is a 1-2 hour <strong>assessment of your body's current state of muscular control and stability</strong>. The goal of the assessment is to take in data of your standing and supine posture along with your active range of motion so that we can look back and determine whether or not we're going in the right direction. Reassessments occur every 1-3 months.";
					} 
					else if (id === 'report-target') {
						//processWheel.style.backgroundImage = "url('../images/Report.svg')";
						//wheelText.innerHTML = "Report";

						header.innerHTML = "<span class=\"orange\">Report</span>";
						body.innerHTML = "Once we've finished your audit, we'll go over a <strong>comprehensive report of our findings</strong>. Using this data, we'll create a detailed plan made specifically for you.";
					} 

					else if (id === 'train-target') {
						//processWheel.style.backgroundImage = "url('../images/Train.svg')";
						//wheelText.innerHTML = "Train";

						header.innerHTML = "<span class=\"orange\">Train</span>";
						body.innerHTML = "<strong>Exercise is the solution.</strong> Based on your assessment data, injury/surgery history, and goals we'll use specific exercises and training methods tailored to your unique body.";
					} 

					else if (id === 'progress-target') {
						//processWheel.style.backgroundImage = "url('../images/Progress.svg')";
						//wheelText.innerHTML = "Progress";

						header.innerHTML = "<span class=\"orange\">Progress</span>";
						body.innerHTML = "Meaning <strong>MICROprogression</strong>. The fitness industry has a habit of progressing exercise much too fast. We want to take things at an appropriate pace in order to give your muscles, joints, connective tissues, and even nervous system time to adapt.";
					}

					header.style.opacity = 1;
					body.style.opacity = 1;
					
				}, 250);
				// progress.style.transition = "all 5s ease-in-out";
				// progress.style.backgroundPosition = 'bottom';
				progress.classList.remove("wheel-loader");
				progress.offsetWidth;
				progress.classList.add("wheel-loader");
		}	


		// });
		// function startTimer() {
		// 	timer = setInterval(function() {
		// 		// progress.style.transition = "none";
		// 		// progress.style.backgroundPosition = 'top';
		// 		currentIndex++;
		// 		if (currentIndex >= targets.length) {
		// 			currentIndex = 0; // Reset to the first target div
		// 		}
				
		// 		changeTarget(currentIndex);
		// 	}, 10000); // Change target every 5 seconds
		// }

		// function resetTimer() {
		// 	clearInterval(timer);
		// 	startTimer();
		// }

		progress.addEventListener("animationend", function(event) {
			currentIndex++;
			if (currentIndex >= targets.length) {
				currentIndex = 0;
			}
			
			changeTarget(currentIndex);
		});

		targets.forEach(function(div, index) {
			div.addEventListener('click', function() {
				currentIndex = index;
				changeTarget(currentIndex);
				//resetTimer();
			});
		});

		//startTimer();

	});

	if ('IntersectionObserver' in window) {
		document.addEventListener("DOMContentLoaded", function() {

			function handleIntersection(entries) {
			entries.map((entry) => {
				if (entry.isIntersecting) {
				// Item has crossed our observation
				// threshold - load src from data-src
				if (entry.target.hasAttribute('data-bgimage')) {
					entry.target.style.backgroundImage = entry.target.dataset.bgimage;
				}else{
					entry.target.classList.add(entry.target.dataset.imagecls);
				}
				// Job done for this item - no need to watch it!
				observer.unobserve(entry.target);
				}
			});
			}

			const lazyImageContainers = document.querySelectorAll('.lazy-load');
			const observer = new IntersectionObserver(
			handleIntersection,
			{ rootMargin: "500px" }
			);
			lazyImageContainers.forEach(lazyImageContainer => observer.observe(lazyImageContainer));
		});
		} else {
		// No interaction support? Load all background images automatically
		const lazyImageContainers = document.querySelectorAll('.lazy-load');
		lazyImageContainers.forEach(lazyImageContainer => {
			if (lazyImageContainer.hasAttribute('data-bgimage')) {
				lazyImageContainer.style.backgroundImage = lazyImageContainer.dataset.bgimage;
			}else{
				entry.target.classList.add(entry.target.dataset.imagecls);
			}
		});
	}

}());

var formFocus = function() {
	// document.getElementById('bb-cta-btn').addEventListener('click', function() {
		var name = document.getElementById('bb-fname');
		name.focus();
	// });
};