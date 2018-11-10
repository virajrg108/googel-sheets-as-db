$(document).ready(function(){
  $("#sub").click(function(){
    var name =  document.getElementById("name").value;
    var email =  document.getElementById("email").value;
    var msg =  document.getElementById("msg").value;
    console.log(name, email, msg);
    $.get("https://script.google.com/macros/s/AKfycby9S61GX0h8zrZaOVh3E-J2EMFq07qIP_Z3l2q2SbaKy9xgiWM/exec", { name:name, email:email, msg:msg });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";
    alert("Message sent successfully");
  });
});
