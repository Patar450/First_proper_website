//--- modal popup ---
$(document).ready(function(){

    function showWindow(){
      $('#mainpop').show();
      //stop scroll
      $('html body').css('overflow','hidden');
    }
    //showWindow()

    function hideWindow(){
      $('#mainpop').hide();
      //on scroll
      $('html body').css('overflow','scroll');
    }
    hideWindow()
    //now call function automatically after some time
    //auto open
    setTimeout(showWindow,200);

    //close after click
    $('#close-btn').click(function(){

      hideWindow()
    })
})

//--- Slide Show ---//
//Worked code inside the index.html file.
$(document).ready(function(){
  var counter = 1;
  setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
  	counter = 1;
  }
  }, 5000);
})
