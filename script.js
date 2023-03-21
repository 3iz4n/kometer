function storing() {
    var name = document.getElementById("userinput").value;
    var sleep = document.getElementById("frm2").value;

    var cool = document.querySelector('input[name=fica]:checked').value;
    var calcio = document.querySelector('input[name=calcetto]:checked').value;



    var nameRight = name.toLowerCase();
    

   if (nameRight === ("errante" || "gian" || "gia" || "gianluca")) {alert("Sei ko!"); }
    




    if (nameRight !== ("errante" || "gian" || "gia" || "gianluca") && sleep <= 8 && cool === "si" && calcio === "si") { alert("Sei ko!"); }
   
    if (nameRight !== ("errante" || "gian" || "gia" || "gianluca") && sleep <= 8 && cool === "no" && calcio === "si") { alert("Sei ko!"); }


if (nameRight !== ("errante" || "gian" || "gia" || "gianluca") && sleep <= 8 && cool === "si" && calcio === "no") { alert("Sei ko!"); }



if (nameRight !== ("errante" || "gian" || "gia" || "gianluca") && sleep >= 8 && cool === "no" && calcio === "no") { alert("Non sei ko! Continua cosi'!"); }
    console.log(name + sleep + cool + calcio);
}



