 function openNav() {
        document.getElementById("mySidenav").style.width = "280px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

          
  function showpw(){
    var pw = document.getElementById('showpw');

    if(pw.type == "text")
    pw.type = "password";
    else
    pw.type = "text";

  
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos){
      document.getElementById("navbar").style.top = "0";

    }
    else{
      document.getElementById("navbar").style.top = "-75px";

    }
    prevScrollpos = currentScrollPos;
  }


  $(document).ready(function(e) {
    $(".showonhover").click(function(){
  $("#selectfile").trigger('click');
});
});


$(":file").filestyle();




      