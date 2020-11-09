//-–––––––––––––––––––––––––––––––––––––––––––––––––––––
//CodeFlow Übung lev1_2: GET Date Methods
var monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];
  
  var wocheTag = [
    "Sonn",
    "Mon",
    "Dien",
    "Mitt",
    "Don",
    "Frei",
    "Sam"
  ];
  let heute = new Date()
  
  console.log(new Date());
  console.log(heute.getFullYear())
  console.log(heute.getMonth()+" monat")
  console.log(heute.getDay()+" Tag")
  console.log(heute.getHours()+" Stunde")
  console.log(heute.getMinutes()+" Minute")
  console.log(heute.getSeconds()+" Sekunde")
  console.log(wocheTag[4]);
  console.log(monate[10]);

  

let day = wocheTag[heute.getDay()]
    
    let ampm  = stunde >= 12 ? 'PM' : 'AM';
    document.getElementById("day1").innerHTML= day
    document.getElementById("pmam1").innerHTML=ampm

function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("stunde1").innerHTML = hour 
    document.getElementById("minute1").innerHTML = min
    document.getElementById("seconde1").innerHTML = sec
   
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */