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