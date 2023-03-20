function storing() {
    var name = document.getElementById("userinput").value;
    var sleep = document.getElementById("frm2").value;

    var cool = document.querySelector('input[name=fica]:checked').value;



    var nameRight = name.toLowerCase();


    if (nameRight === "errante") { alert("sei ko!"); }
    if (nameRight !== "errante" && sleep <= 6 && cool === "si") { alert("sei ko!"); }
    else {
        alert("non sei ko! Continua cosi'!");
    }


    console.log(name + sleep + cool);
}