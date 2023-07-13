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
