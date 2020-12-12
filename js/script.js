
let buttonVisible = false; /*Permet de sauvegarder si oui ou non le boutton envoyer doit être visible*/
/*On place cette variable ici afin qu'elle s'execute dès l'importation de ce script et pour que la variable soit accessible dans tout le code */
document.addEventListener('DOMContentLoaded', function() {
    verif();
  });

  function verif ()
  {
      var etat = document.getElementById('check').checked;
       
      if(!etat)
      {
          document.getElementById('2').className = 'off';
      }
      else
      {  
          document.getElementById('2').className = 'on';
      }
  }

  document.addEventListener('DOMContentLoaded', function() {
    echange();
  });

  function echange ()
  {
      /*var etat = document.getElementById('check').checked;*/
      
      if(buttonVisible)/*Si la case a été coché */
      {
        document.getElementById('1').className = 'on';/* On affihe */
        /*document.getElementById('3').className = 'off';*/
        buttonVisible = false;/*On change la valeur afin que quand cette fonction soit réappelé, ça cache le boutton  */
      }
      else
      {  
        document.getElementById('1').className = 'off';/*On cache le bouton */
          /*document.getElementById('3').className = 'on';*/
          buttonVisible = true;/*On change la valeur pour le prohain appel */
        }

  }
