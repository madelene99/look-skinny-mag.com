
var counter1 = 182;
    var counter2 = 292;
   
        
        function progressDemo() {
          counter1=counter1+55;
         
          document.getElementById( 'numbers2_1' ).innerHTML=counter1;
            /*if( counter1 >= 116223 ) {
           clearInterval( timer );
            document.getElementById( 'numbers2_1' ).innerHTML="116,223";
           }*/
          }
          function progressDemo2() {
          counter2=counter2+55;
          document.getElementById( 'numbers3_2' ).innerHTML=counter2;
         
             /*if( counter2 >= 82241 ) {
           clearInterval( timer2 );
            document.getElementById( 'numbers3_2' ).innerHTML="82,241";
            }*/
            
          }
          
         

        
        var timer = setInterval(progressDemo, 2000 );
        var timer2 = setInterval(progressDemo2, 2000 );
         
       
   



$(document).ready(function() {




 function getURLParameter(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || ''
        );
    }

 gart=getURLParameter('adid');
 gart1=getURLParameter('adsetname');
 gart2=getURLParameter('age');
 gart3=getURLParameter('gender');
 gart4=getURLParameter('placement');



 
glink="index1.html?adsetname="+gart1+"&placement="+gart4+"&age="+gart2+"&gender="+gart3+"&adid="+gart+"";
//glink="count.php?adsetname="+gart1+"&placement="+gart4+"&age="+gart2+"&gender="+gart3+"&adid="+gart+"";
 
 


//glink="http://track-c.onversion.club/876416d1-2a87-477a-a139-1e433dc9ba37?adsetname="+gart1+"&placement="+gart4+"&age="+gart2+"&gender="+gart3+"&adid="+gart+"";
//glink="http://track-c.onversion.club/76b7c8e0-366b-4cba-a691-504aa86fa88d?adsetname="+gart1+"&placement="+gart4+"&age="+gart2+"&gender="+gart3+"&adid="+gart+"";
console.log(glink);   





a=0;
$(".amazonbut").click(function(){
  a=1;
  $(".choose").hide();
  $(".amazon1").show();
});
$(".walmartbut").click(function(){
  a=2;
  $(".choose").hide();
  $(".walmart1").show();
});

$(".walmart1 a").click(function(){
  
  $(".walmart1").hide();
  $(".walmart2").show();
});
$(".amazon1 a").click(function(){
  
   
  startCheck();

});

$(".walmart5 a").click(function(){

  startCheck();

});


  $('#questionWrapper .question').first().show(); //show first questionblock

 /* $("#questionWrapper .answer" ).click(function( event ) {
    event.preventDefault();
    if ($(this).attr('class') == 'answer cannotContinue' ) {
      alert('Вибачте, вам повинно бути 16 або більше для участі в опитуванні. ');
      return;
    }
    else {
      $(this).parent('.question').fadeOut(200);
      if ($(this).parent().next('.question').length) {
        $(this).parent().next('.question').delay(200).fadeIn();
      }
      else {
        startCheck();
      }
    }
  }); */
});

function startCheck() {
    document.location.href=glink;

}

function toggleDiv(target) {
  $(target).toggle();
}
