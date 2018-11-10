$(document).ready(function(){
  $("#sub").click(function(){
    var name =  document.getElementById("name").value;
    var email =  document.getElementById("email").value;
    var msg =  document.getElementById("msg").value;
    console.log(name, email, msg);
    $.get("https://script.google.com/macros/s/AKfycby8uLny0p-GuStHktClEm9CqsphI8mp2fEaQE8i84g72BHpKGL5/exec", { name:name, email:email, msg:msg });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";
  });
});
