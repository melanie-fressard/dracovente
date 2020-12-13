document.addEventListener('DOMContentLoaded', function() {
    verif();
  });

  function verif () //affiche un element si la case est cochée
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

  function echange () //affiche un element si la case est cochée et en fait disparaitre un autre
  {
    var etat = document.getElementById('lu').checked;
       
      if(!etat)
      {
        document.getElementById('1').className = 'off';
          document.getElementById('3').className = 'on';
      }
      else  { 
        document.getElementById('1').className = 'on';
          document.getElementById('3').className = 'off';
      }
  }
