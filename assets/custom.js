// $("body").on("click", ".close-btn, .popup-overlay", function(){
//   $(".popup-wrapper").hide();
//   $("body").removeClass("overflow");
//   $(".quickView-popup .popup-img").empty();
//   $(".quickView-popup .popup-text-wraper").empty();
// });  

// $("body").on("click", "li.pop-up-slider", function(event){
//   event.preventDefault();
//   event.stopPropagation();
//   var productData = $(this).find(".quickView-product-json").html();
//   var productJson = JSON.parse(productData);
//   //console.log(productJson);
//   var productTitle = productJson.title;
//   var productImage = productJson.featured_image;
//   var productDescription = productJson.description;
//   var descriptionHtml = `<h2 class="email-head">${productTitle}</h2>
// <div>${productDescription}</div>
// 	`;
//   $(".quickView-popup .popup-img").append("<img src='"+productImage+"' alt='"+productTitle+"'>");
//   $(".quickView-popup .popup-text-wraper").append(descriptionHtml);
//   $(".popup-wrapper").addClass("loading");
//   $(".popup-wrapper").show();
//   $("body").addClass("overflow");
//   setTimeout(function(){
//     $(".popup-wrapper").removeClass("loading");
//   }, 1000);
// });
 

// $(document).ready(function(){
//   /*
//   $('.banner-slider').slick({
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: true,
//     fade:true,
//     autoplay: true,
//     speed: 800
//   });
// */

//   if($(".new_slider_items").length > 2){
//     $(".new_slider_items").removeClass("hidden");
// }

// $('.new_slider, .new_slider1').slick({
//   dots: false,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   arrows: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     }
   
  
//   ]
// });

// });

/*

var slider = new KeenSlider("#keen_slider", {
  slides: {
    perView: 5,
    spacing: 25,
  },
})



  
$('.owl_slider').owlCarousel({
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

*/

$(document).on('click','a#collection-url', function(e){
  e.preventDefault();
  var pageURL=$(this).attr('href');
  var curr_url = window.location.href;
  console.log(pageURL);
   history.pushState(null, '', pageURL);
   $.ajax({    
      type: "GET",
      url: curr_url, 
      data:{page:pageURL},            
      dataType: "html",                  
      success: function(data){ 
        console.log("Hello World");
       $('#MainContent').html(data);    
              
      }
  });
});

$(document).ready(function(){
  $('#sortby').click(function(){
    $('#sortbyContent').slideToggle("fast");
    $('#arrow-btn').toggleClass('active');
  })
});
