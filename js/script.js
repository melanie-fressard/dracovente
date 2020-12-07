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
      var etat = document.getElementById('check').checked;
       
      if(!etat)
      {
        document.getElementById('1').className = 'on';
          document.getElementById('2').className = 'off';
      }
      else
      {  
        document.getElementById('1').className = 'off';
          document.getElementById('2').className = 'on';
      }
  }