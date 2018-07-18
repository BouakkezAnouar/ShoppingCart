       
        
        function afficherPrix(){
     let prixSbedry =document.querySelector('.sbedri-prix').innerHTML.trim();
        prixSbedry = prixSbedry.substr(1,prixSbedry.length);

     let prixBallon = document.querySelector('.ballon-prix').innerHTML.trim();
        prixBallon = prixBallon.substr(1,prixBallon.length);


      let prixBaloon = document.querySelector('.baloon-prix').innerHTML.trim();
       prixBaloon = prixBaloon.substr(1,prixBaloon.length);

    //make them number
       let numberOfSbedry = Number(  document.querySelector('.sbedri-count').value);
       let numberOfBallon =  Number( document.querySelector('.ballon-count').value);
       let numberOfBaloon =  Number( document.querySelector('.baloon-count').value);
            


      
       if (document.querySelector('.baloon-count').value <=0 || isNaN(document.querySelector('.baloon-count').value ) )
            {numberOfBaloon =0 ;
                document.querySelector('.baloon-count').value="0";
            }
            if ( document.querySelector('.sbedri-count').value <=0  || isNaN(document.querySelector('.sbedri-count').value ) )
            {numberOfSbedry =0 ;
                document.querySelector('.sbedri-count').value="0";
            }
            if ( document.querySelector('.ballon-count').value <=0  || isNaN(document.querySelector('.ballon-count').value ) )
            {numberOfBallon =0 ;
                document.querySelector('.ballon-count').value="0";
            }

            var total = numberOfSbedry * prixSbedry + numberOfBaloon * prixBaloon + prixBallon *numberOfBallon  ;

         document.querySelector('.total-money').innerHTML ='$' + total; 
            
             document.querySelector('.ballon-count').innerHTML=numberOfBallon;
            document.querySelector('.sbedri-count').innerHTML=numberOfSbedry;
            document.querySelector('.baloon-count').innerHTML=numberOfBaloon;
            
        }
        
        

    let moins = document.querySelectorAll('.moins');

      // prix


   for (var i = 0; i < moins.length; i++) {
      moins[i].addEventListener('click', function(e) {
            
        var numero=  e.target.nextElementSibling.value;
        if (Number(numero)<=0) return;
        e.target.nextElementSibling.value = Number (numero)-1;
          
        afficherPrix();

        }
    )};

      var plus = document.querySelectorAll('.plus');


   for (var i = 0; i < plus.length; i++) {
      plus[i].addEventListener('click', function(e) {
            
        var numero= e.target.previousElementSibling.value;
        if (Number(numero)>=100) return;
        e.target.previousElementSibling.value = Number (numero)+1;
          

            afficherPrix();


        }
    )};
        
        
        // reset 
        
        var supprimer = document.querySelectorAll('.supprimer');


   for (var i = 0; i < supprimer.length; i++) {
      supprimer[i].addEventListener('click', function(e) {
            
         e.target.parentElement.childNodes[9].childNodes[3].value ="0";
        
          afficherPrix();

        }
    )};


      var changer = document.querySelectorAll('textarea');


   for (var i = 0; i < changer.length; i++) {
      changer[i].addEventListener('keyup', function(e) {
            
         
          
          afficherPrix();

        }
    )};


         var like = document.querySelectorAll('.like');


   for (var i = 0; i < like.length; i++) {
      like[i].addEventListener('click', function(e) {
            
         
         if (e.target.src.includes("dislike.png"))
             e.target.src ="./img/like.png"
          else 
              e.target.src ="./img/dislike.png"
         
        }
    )};
