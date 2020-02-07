




// Set the date we're counting down to
var countDownDate = new Date("Nov 09, 2018 5:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
	 document.getElementById("days").innerHTML =days;
	 document.getElementById("hours").innerHTML =hours;
	 document.getElementById("minutes").innerHTML =minutes;
	 document.getElementById("seconds").innerHTML =seconds;
	 
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "09-NOV-2018";
    }
}, 1000);



// Initialize and add the map
/**
function initMap() {
  // The location of Uluru
  
  var uluru = {lat: 11.787097, lng: 77.987650};
  
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
		
}**/


    jQuery(function($) {
        // Asynchronously Load the map API 
        var script = document.createElement('script');
		script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBme9TJ2JlA-I1FYAOF6R8Znk26Bqe__O4&callback=initialize";
        document.body.appendChild(script);
    });

    function initialize() {
        var map;
        var bounds = new google.maps.LatLngBounds();
		
        var mapOptions = {
            mapTypeId: 'roadmap',
			};

        // Display a map on the page
        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        map.setTilt(45);

        // Multiple Markers
        var markers = [
            ['Olaipatti, Tamil Nadu 636503',11.787060,77.987666],
            ['Tholasampatti, Tamil Nadu 636503', 11.752490, 77.974840],
           ['Tholasampatti, Tamil Nadu 636503', 11.752503, 77.975312]
            
        ];

        // Info Window Content
        var infoWindowContent = [
            ['<div class="info_content">' +
                '<h3 class="info_location_name">KSV MAHAL</h3>' +
                '<p class="info_location_text">Kamaneri, Mettur Main Road,Salem</p>' +
                '<a href="https://goo.gl/maps/V4inaBELvpT2" class="btn-link" target="_blank" >View Location</a>' +
                '</div>'
            ],
            ['<div class="info_content">' +
                '<h3 class="info_location_name">The Groom\'s Home</h3>' +
                '<p class="info_location_text">Tholasampatty,Omalur,Salem</p>' +
                '<a href="https://goo.gl/maps/TLhDtmpQ7iy" class="btn-link" target="_blank" >View Location</a>' +
                '</div>'
            ],
            ['<div class="info_content">' +
                '<h3 class="info_location_name">The Bridal\'s Home</h3>' +
                '<p class="info_location_text">Tholasampatty,Omalur,Salem</p>' +
                '<a href="https://goo.gl/maps/VvNh8ZoUmk52" class="btn-link" target="_blank" >View Location</a>' +
                '</div>'
            ],
          
        ];
		
		var image= './assets/img/heartpin.png';
        // Display multiple markers on a map
        var infoWindow = new google.maps.InfoWindow({ maxWidth: 280 }),
            marker, i;
		
        // Loop through our array of markers & place each one on the map  
        for (i = 0; i < markers.length; i++) {
            var position = new google.maps.LatLng(markers[i][1],
                markers[i][2], markers[i][3]);
			var position1 = new google.maps.LatLng(11.787060,77.987666);
            bounds.extend(position1);
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: markers[i][0],
				icon:image,
				animation:google.maps.Animation.BOUNCE
				
            });

            // Allow each marker to have an info window    
            google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
                return function() {
                    infoWindow.setContent(infoWindowContent[i][0]);
                    infoWindow.open(map, marker);
                }
            })(marker, i));
			
			 // Allow each marker to have an info window    
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infoWindow.setContent(infoWindowContent[i][0]);
                    infoWindow.open(map, marker);
                }
            })(marker, i));

            // Automatically center the map fitting all markers on the screen
            map.fitBounds(bounds);
        }

        // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
        var  tilesloadedListener = google.maps.event.addListener((map),  'tilesloaded', function(event) {
            this.setZoom(14);
            google.maps.event.removeListener(tilesloadedListener);
        });

    }
  
$(document).ready(function(){

$(function(){
 
    $(document).on( 'scroll', function(){
 
    	if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
			
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

});

$(document).ready(function() {
 
   // Animated Scrolling
    (function(){
        var topoffset = 0;
          $('#scroll').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top-topoffset
                }, 1000);
                return false;
              } // target.length
            } //location hostname
          }); //on click


      }())
});


$.fn.christmas = function() {
  $(this).each(function() {
    $(this).html($(this).text().split("").map(function(v, i) {
     return '<span class="christmas-' + (i % 2 == 0 ? 'gold' : 'gold') + '">' + "&nbsp Kavi & Shalini" + '</span>';
    }).join(""));
  });
};

$.fn.reception = function() {
  $(this).each(function() {
    $(this).html($(this).text().split("").map(function(v, i) {
     return '<span class="christmas-' + (i % 2 == 0 ? 'gold' : 'gold') + '">' + "Reception" + '</span>';
    }).join(""));
  });
};


$.fn.kalyanam = function() {
  $(this).each(function() {
    $(this).html($(this).text().split("").map(function(v, i) {
     return '<span class="christmas-' + (i % 2 == 0 ? 'gold' : 'gold') + '">' + "கல்யாணம்" + '</span>';
    }).join(""));
  });
};




  