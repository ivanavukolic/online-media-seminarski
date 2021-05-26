function samoslova(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("Pogresno ste uneli ime i prezime");
     return false;
     }
  }
  
function datum(inputText)
  {
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if(inputText.value.match(dateformat))
  {
  document.slanje.vreme();

  var opera1 = inputText.value.split('/');
  var opera2 = inputText.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  
  if (lopera1>1)
  {
  var pdate = inputText.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputText.value.split('-');
  }
  var dd = parseInt(pdate[0]);
  var mm  = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  alert('Pogresno ste uneli datum');
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Pogresno ste uneli datum');
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Pogresno ste uneli datum');
  return false;
  }
  }
  }
  else
  {
  alert("Pogresno ste uneli datum");
  document.slanje.vreme();
  return false;
  }
 }
  
 function samobroj(unos) {
    var numbers = /^[0-9]+$/;
      if(unos.value.match(numbers))
      {
      document.slanje.vreme.focus();
      return true;
      }
      else
      {
      alert('Unesite korektan broj telefona');
      document.slanje.vreme.focus();
      return false;
      }
 }
