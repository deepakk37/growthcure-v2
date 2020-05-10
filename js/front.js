$(function () {

    // ---------------------------------------------- //
    // Navbar
    // ---------------------------------------------- //

    // $(document).scroll(function () {
    //     if ($(window).scrollTop() >= $('header').offset().top) {
    //         $('nav').addClass('sticky');
    //     } else {
    //         $('nav').removeClass('sticky');
    //     }
    // });


    // ---------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------- //

    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    // ---------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------- //

    $('.navbar-nav a, #scroll-down').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    // ------------------------------------------------------ //
    // styled Google Map
    // ------------------------------------------------------ //

    // map();
    // rotateImage();


    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $( "<link id='new-stylesheet' rel='stylesheet'>" ).insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

        }

        return false;
    });

});


// ------------------------------------------------------ //
// styled Google Map
// ------------------------------------------------------ //

// function map() {
//
//     if ($('#map').length > 0) {
//
//
//         function initMap() {
//
//             var location = new google.maps.LatLng(-12.043501, -77.027947);
//
//             var mapCanvas = document.getElementById('map');
//             var mapOptions = {
//                 center: location,
//                 zoom: 15,
//                 panControl: false,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             }
//             var map = new google.maps.Map(mapCanvas, mapOptions);
//
//             var markerImage = 'img/marker.png';
//
//             var marker = new google.maps.Marker({
//                 position: location,
//                 map: map,
//                 icon: markerImage
//             });
//
//             var contentString = '<div class="info-window">' +
//                 '<h3>Info Window Content</h3>' +
//                 '<div class="info-content">' +
//                 '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
//                 '</div>' +
//                 '</div>';
//
//             var infowindow = new google.maps.InfoWindow({
//                 content: contentString,
//                 maxWidth: 400
//             });
//
//             marker.addListener('click', function () {
//                 infowindow.open(map, marker);
//             });
//
//             var styles = [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }];
//
//             map.set('styles', styles);
//         }
//
//         google.maps.event.addDomListener(window, 'load', initMap);
//     }
//
// }
// function rotateImage() {
//   // Init
//   var container = document.getElementById("rotateValues"),
//     inner = document.getElementById("joinimage1");
//
//   // Mouse
//   var mouse = {
//     _x: 0,
//     _y: 0,
//     x: 0,
//     y: 0,
//     updatePosition: function(event) {
//       var e = event || window.event;
//       this.x = e.clientX - this._x;
//       this.y = (e.clientY - this._y) * -1;
//     },
//     setOrigin: function(e) {
//       this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
//       this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
//     },
//     show: function() {
//       return "(" + this.x + ", " + this.y + ")";
//     }
//   };
//
//   // Track the mouse position relative to the center of the container.
//   mouse.setOrigin(container);
//
//   //----------------------------------------------------
//
//   var counter = 0;
//   var refreshRate = 10;
//   var isTimeToUpdate = function() {
//     return counter++ % refreshRate === 0;
//   };
//
//   //----------------------------------------------------
//
//   var onMouseEnterHandler = function(event) {
//     update(event);
//   };
//
//   var onMouseLeaveHandler = function() {
//     inner.style = "";
//   };
//
//   var onMouseMoveHandler = function(event) {
//     if (isTimeToUpdate()) {
//       update(event);
//     }
//   };
//
//   //----------------------------------------------------
//
//   var update = function(event) {
//     mouse.updatePosition(event);
//     updateTransformStyle(
//       ((mouse.y /2)),
//       ((mouse.x /2))
//     );
//   };
//
//   var updateTransformStyle = function(x, y) {
//     var style = "rotateY(" + y + "deg)";
//     inner.style.transform = style;
//     inner.style.webkitTransform = style;
//     inner.style.mozTranform = style;
//     inner.style.msTransform = style;
//     inner.style.oTransform = style;
//   };
//
//   //--------------------------------------------------------
//
//   container.onmousemove = onMouseMoveHandler;
//   container.onmouseleave = onMouseLeaveHandler;
//   container.onmouseenter = onMouseEnterHandler;
// }
